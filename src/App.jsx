// Importing necessary modules

import { createGlobalStyle } from 'styled-components'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Redirect from './components/Redirect'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from "./pages/Crew"
import Technology from './pages/Technology'

// Function that changes background image depending on viewport and path

function setImageBackground(path, viewport) {
  switch (true) {
    case path === '/': return `url(/background-home-${viewport}.jpg)`
    case path.includes('destination'): return `url(/background-destination-${viewport}.jpg)`
    case path.includes('crew'): return `url(/background-crew-${viewport}.jpg)`
    case path.includes('technology'): return `url(/background-technology-${viewport}.jpg)`
  }
}

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
    font-size: 16px;
  }
  #root {
    background-image: ${(props) => setImageBackground(props.path, 'mobile')};
    background-size: 100% 100%;
    @media (min-width: 620px) {
      background-image: ${(props) => setImageBackground(props.path, 'tablet')};
    }
    @media (min-width: 1024px) {
      background-image: ${(props) => setImageBackground(props.path, 'desktop')};
    }
  }

`

// Actual app

function App() {

  return (
    <>
      <GlobalStyle path={useLocation().pathname} />
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index={true} element={<Home />} />
          <Route path='destination'>
            <Route index={true} element={<Redirect location='destination' />} />
            <Route path=':id' element={<Destination />} />
          </Route>
          <Route path='crew' element={<Crew />}>
            <Route index={true} element={<Redirect location='crew' />} />
            <Route path=':id' element={<Crew />} />
          </Route>
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </>
  )
}

export default App