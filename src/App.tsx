import { useState, type JSX } from "react"
import Introduction from "./components/Introduction"
import ElementSizing from "./components/ElementSizing"

export default function App(): JSX.Element {

  const [currentPage, setCurrentPage] = useState<string>("intro")

  function changeCurrentPage(): void {
    setCurrentPage("content")
  }

  return (
    <>
      {currentPage === "intro" ?
        <Introduction changeCurrentPage={changeCurrentPage} />
        :
        <ElementSizing />
      }
    </>

  )

}