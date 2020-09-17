import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../../styles/theme"
import GlobalStyles from "../../styles/global"
import SEO from '../utils/SEO'

import MenuButton from "../Button"

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <SEO/>
            <MenuButton />
            {children}
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
