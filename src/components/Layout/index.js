import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../../styles/theme"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
