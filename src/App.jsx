import { BrowserRouter, Routes, Route } from "react-router"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/"></Route>
            <Route path="/movie/:id"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
