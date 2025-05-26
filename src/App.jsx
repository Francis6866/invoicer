import { Routes } from "react-router-dom"
import Hompage from "./pages/Hompage"
import { Route } from "react-router-dom"
import Policies from "./pages/Policies"
import TC from "./pages/TC"
import Layout from "./pages/Layout"



function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hompage />} />
          <Route path="policies" element={<Policies />} />
          <Route path="terms" element={<TC /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App