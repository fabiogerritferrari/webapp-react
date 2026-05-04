import { BrowserRouter, Routes, Route } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import Homepage from "./components/pages/HomePage"
import DetailPage from "./components/pages/DetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/movie/:id" element={<DetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
