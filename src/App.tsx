import { Sugar } from 'react-preloaders';

import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import AboutUs from "./Components/ContactUs/ContactUs"
import { Container } from "@mui/material"

function App() {
  return (
    <Container maxWidth={"xl"} className="px-4 sm:px-10">
      <Layout>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/contact" element={ <AboutUs />} />
        </Routes>
      </Layout>
      <Sugar time={2000} background="#424242" color="#BDBDBD"/>
    </Container>
  )
}

export default App
