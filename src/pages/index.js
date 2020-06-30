import React from "react"

import Layout from "../components/Layout"
import Home from "../sections/Home"
import About from "../sections/About"
import Services from "../sections/Services"
import Contacts from "../sections/Contacts"

const App = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Services />
            <Contacts />
        </Layout>
    )
}

export default App
