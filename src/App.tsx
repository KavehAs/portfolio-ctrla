import { Sugar } from 'react-preloaders';

import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import AboutUs from "./Components/ContactUs/ContactUs"
import { Container } from "@mui/material"
import { useEffect, useState } from 'react';

function App() {

  const [preLoader, setPreLoader] = useState<boolean>(true);

  useEffect(() => {
    // Hide the preloader after the app has finished loading.
    // setTimeout(() => {
      setPreLoader(false);
    // }
    // , 1000);
  }, [])

  return (
    <Container maxWidth={"xl"} className="px-4 sm:px-10">
     <Sugar background="#424242" color="#BDBDBD" customLoading={preLoader} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Container>
  )
}

export default App
