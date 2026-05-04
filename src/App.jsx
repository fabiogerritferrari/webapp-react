import { BrowserRouter, Routes, Route } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/"></Route>
            <Route path="/movie/:id"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
