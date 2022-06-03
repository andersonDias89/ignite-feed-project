import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

// lista de todos os posts que vem da API

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andersondias89.png",
      name: "Anderson Dias",
      role: "Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "anderson.developer/doctorcore" },
    ],
    publisheAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alysonbarreto02.png",
      name: "Alyson Barreto",
      role: "Developer Jr"
    },
    content: [
      { type: "paragraph", content: "E ai galera" },
      { type: "paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis quia tempore? Minus fugiat quos quam quisquam eos? Molestiae assumenda eos quidem maiores possimus omnis, error incidunt commodi quibusdam odit." },
      { type: "link", content: "alyson.developer/doctorcore" },
    ],
    publisheAt: new Date("2022-05-10 20:00:00"),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row text-text items-start w-11/12 md:w-4/5 m-auto md:space-x-5 mt-5">
        <Sidebar />

        <main className="w-full md:flex-1">
          {/* map para percorrer os posts e retornar o componente Post 
          passando os dados como propriedade */}

          {posts.map((post, index) => {
            return (
              <Post
                key={`index-lista-post-${index}`}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}

export default App


