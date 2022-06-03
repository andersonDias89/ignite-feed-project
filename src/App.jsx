import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


function App() {
  return (
    <>
      <Header />

      <div className="flex text-text items-start w-4/5 m-auto space-x-5 mt-5">
        <Sidebar />

        <main className="flex-1">
          <Post/>
          <Post/>
        </main>
      </div>

    </>
  )
}

export default App


