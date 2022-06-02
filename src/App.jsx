import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"

function App() {
  return (
    <>
      <Header />

      <div className="flex text-text items-start w-4/5 m-auto space-x-5 mt-5">
        <Sidebar />

        <main>
          <Post
            author='Anderson Dias'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate et sunt velit optio nisi quos expedita magni fugit, autem enim repellendus minima reiciendis alias culpa quo ipsum itaque voluptatum corporis?'
          />
        </main>
      </div>

    </>
  )
}

export default App


