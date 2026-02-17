import { useState, type JSX } from "react"
import Introduction from "./components/Introduction"
import ElementSizing from "./components/ElementSizing"
import DisplayAndPosition from "./components/DisplayAndPosition"

export default function App(): JSX.Element {

  const [currentPage, setCurrentPage] = useState<string>("intro")

  function changeCurrentPage(): void {
    setCurrentPage(prevVal => {
      return (prevVal === "intro") ? "es" : "dap"
    })
  }

  return (
    <>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TailwindCSS SMC</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white hover:font-bold">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white hover:font-bold">
              <a href="#">About</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white hover:font-bold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex items-center justify-center h-full">
        {currentPage === "intro" && <Introduction changeCurrentPage={changeCurrentPage} />}
        {currentPage === "es" && <ElementSizing />}
        {currentPage === "dap" && <DisplayAndPosition />}
      </main>
      <button onClick={() => (changeCurrentPage())} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition"> Next </button>
      <footer className="bg-gray-800 text-gray-200 p-4 text-center mt-auto">
        <p>&copy; 2026 TailwindCSS SMC. All rights reserved</p>
      </footer>
    </>

  )

}