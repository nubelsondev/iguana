import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        outline: none;
    }

    html{
        font-size: 62.5%;
    }

    body{
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        line-height: 1.6;
        font-size: 1.6rem;
        --primary: ${({ theme }) => theme.colors.primary};
        --secondary: ${({ theme }) => theme.colors.secondary};
        --text: ${({ theme }) => theme.colors.text};
        --white: ${({ theme }) => theme.colors.white};
        --black: ${({ theme }) => theme.colors.black};
        color: var(--text);
        background-color: var(--white);
    }

    h1, h2, h3, h4, h5{
        color: var(--black)
    }
`
