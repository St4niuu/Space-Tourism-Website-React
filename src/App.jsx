// Importing necessary files

import { createGlobalStyle } from "styled-components"
import { Routes, Route, useLocation } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"

// Setting global style

const GlobalStyle = createGlobalStyle`

  *::before, *::after, * {
    padding : 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }

`

// Actual app

function App() {

  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index={true} element={<Home />} />
          <Route path="destination">
            <Route index={true} element={<Redirect location="destination" />} />
            <Route path=":id" element={<Destination />} />
          </Route>
          <Route path="crew/:id" element={<Crew />}>
            <Route index={true} element={<Redirect location="crew" />} />
            <Route path=":id" element={<Crew />} />
          </Route>
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </>
  )
}

export default App