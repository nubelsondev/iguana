import React from "react"

import Layout from "../components/Layout"
import Home from "../sections/Home"
import About from "../sections/About"
import Services from "../sections/Services"

const App = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Services />
        </Layout>
    )
}

export default App
