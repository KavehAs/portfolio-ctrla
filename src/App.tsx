// import { Sugar } from 'react-preloaders';

import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import AboutUs from "./Components/AboutUs/AboutUs"
import { Container } from "@mui/material"
import {useRef} from 'react';

function App() {
  const sampleRef = useRef(null);

  return (
    <Container maxWidth={"xl"} className="px-4 sm:px-10">
      <Layout ref>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <AboutUs />} />
        </Routes>
      </Layout>
    </Container>
  )
}

export default App
