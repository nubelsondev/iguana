import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

export const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;

    @media ${props => props.theme.mediaQueries.small} {
        height: 100%;
    }
`

const StyledSide = styled.div`
    width: 50%;
    height: 100%;
    padding: 7rem;

    background-color: ${({ background }) => background && "var(--secondary)"};

    @media ${props => props.theme.mediaQueries.larger} {
        padding: 6rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
        padding: 5rem;
    }
`

const StyledImage = styled(StyledSide)`
    div {
        width: 100%;
        height: 100%;

        background-image: url(${({ image }) => image});
        background-size: cover;
        background-position: center;
    }

    @media ${props => props.theme.mediaQueries.medium} {
        display: none;
    }
`

export const Info = styled(StyledSide)`
    width: 50%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.mediaQueries.largest} {
        padding: 3rem;
    }

    @media ${props => props.theme.mediaQueries.medium} {
        width: 100%;
    }
`
export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        font-size: 1.8rem;
        font-weight: 500;
        color: var(--black);
        line-height: 1;
    }

    a {
        color: var(--white);
        text-transform: uppercase;
        text-decoration: none;
        background-color: var(--primary);
        padding: 1.6rem 2.6rem;
        display: inline-block;
        margin-top: 1rem;
    }

    & > :first-child {
        margin-bottom: 11rem;
    }

    & > :last-child {
        text-align: right;
    }

    @media ${props => props.theme.mediaQueries.larger} {
        p {
            font-size: 1.6rem;
        }
    }

    @media ${props => props.theme.mediaQueries.large} {
        & > :first-child {
            margin-bottom: 7rem;
        }
        p {
            font-size: 1.4rem;
        }

        a {
            font-size: 1.2rem;
        }
    }
`

const StyledTitle = styled.div`
    width: 100%;
    margin-bottom: 15rem;

    h2 {
        font-size: 5.4rem;
        margin-bottom: 1rem;
    }

    p {
        max-width: 80%;
        text-align: right;
    }

    @media ${props => props.theme.mediaQueries.larger} {
        margin-bottom: 10rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
        h2 {
            font-size: 4.5rem;
        }
    }

    @media ${props => props.theme.mediaQueries.medium} {
        text-align: center;

        p {
            text-align: center;
            max-width: 100%;
        }
    }

    @media ${props => props.theme.mediaQueries.small} {
        h2 {
            font-size: 4.6rem;
        }
    }

    @media ${props => props.theme.mediaQueries.smallest} {
        h2 {
            font-size: 4rem;
        }
    }
`

export const Footer = styled.div`
    color: var(--black);
    text-align: center;
    font-size: 1.6rem;
    margin-top: 15rem;

    a {
        color: var(--black);
    }

    @media ${props => props.theme.mediaQueries.larger} {
        font-size: 1.4rem;
    }
`

const StyledButton = styled(Link)`
    width: 7rem;
    height: 7rem;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.5rem;
    background-color: var(--primary);
    cursor: pointer;

    @media ${props => props.theme.mediaQueries.small} {
        width: 6rem;
        height: 6rem;
        padding: 1rem;
    }

    @media ${props => props.theme.mediaQueries.small} {
        width: 4rem;
        height: 4rem;
        padding: 0rem;
    }
`

export const SectionTitle = ({ title, subtitle }) => {
    return (
        <StyledTitle>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </StyledTitle>
    )
}

export const Image = ({ image, background }) => {
    return (
        <StyledImage background={background} image={image}>
            <div />
        </StyledImage>
    )
}

export const ScrollToTop = ({ to, children }) => {
    return (
        <StyledButton to={to} spy={true} smooth={true}>
            {children}
        </StyledButton>
    )
}
