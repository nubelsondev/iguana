import React from "react"
import styled from "styled-components"

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

    @media ${props => props.theme.mediaQueries.small} {
        padding: 14rem 3rem;
    }

    @media ${props => props.theme.mediaQueries.smallest} {
        padding: 14rem 2rem;
    }
`

const StyledTitle = styled.div`
    width: 100%;
    margin-bottom: 5rem;

    h2 {
        font-size: 5.4rem;
        margin-bottom: 1rem;
    }

    p {
        max-width: 80%;
        text-align: right;
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

export const Content = styled.div`
    width: 100%;

    & > :not(:last-child) {
        margin-bottom: 5rem;
    }
`

export const ContentGroup = styled.div`
    width: 100%;
    text-align: ${({ invert }) => invert && "right"};

    & > :not(:last-child) {
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 3.4rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
        h3 {
            font-size: 3rem;
        }
    }

    @media ${props => props.theme.mediaQueries.medium} {
        text-align: center;
    }

    @media ${props => props.theme.mediaQueries.smallest} {
        h3 {
            font-size: 2.6rem;
        }
    }
`

export const Image = ({ image, background }) => {
    return (
        <StyledImage background={background} image={image}>
            <div />
        </StyledImage>
    )
}

export const SectionTitle = ({ title, subtitle }) => {
    return (
        <StyledTitle>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </StyledTitle>
    )
}
