import { Routes } from "react-router-dom"
import Hompage from "./pages/Hompage"
import { Route } from "react-router-dom"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hompage />} />
      </Routes>
      {/* <Hompage />       */}
    </>
  )
}

export default App