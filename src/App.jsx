// Importing necessary files

import { createGlobalStyle } from "styled-components"
import { Routes, Route, useLocation } from "react-router-dom"

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

  return null
}

export default App