// import { Sugar } from 'react-preloaders';

import { Routes, Route } from "react-router-dom"
import Layout from "./Components/layout/Layout"
import Home from "./Components/Pages/Home"
import Portfolio from "./Components/Pages/Portfolio"
import ContactUs from "./Components/Pages/ContactUs"
import AboutUs from "./Components/Pages/AboutUs"
import { Container } from "@mui/material"

function App() {
  return (
    <Container maxWidth={"lg"} className="px-10">
      <Layout>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/portfolio" element={ <Portfolio />} />
          <Route path="/contact" element={ <ContactUs />} />
          <Route path="/about" element={ <AboutUs />} />
        </Routes>
      </Layout>
    </Container>
  )
}

export default App
