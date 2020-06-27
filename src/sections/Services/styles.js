import React from "react"
import styled from "styled-components"

export const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;

    @media ${props => props.theme.mediaQueries.largest} {
    }

    @media ${props => props.theme.mediaQueries.larger} {
    }

    @media ${props => props.theme.mediaQueries.large} {
    }

    @media ${props => props.theme.mediaQueries.medium} {
    }

    @media ${props => props.theme.mediaQueries.small} {
        height: 100%;
    }

    @media ${props => props.theme.mediaQueries.smaller} {
    }

    @media ${props => props.theme.mediaQueries.smallest} {
    }
`

const StyledSide = styled.div`
    width: 50%;
    height: 100%;
    padding: 7rem;

    background-color: ${({ background }) => background && "var(--black)"};

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
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 7rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 6rem;

    @media ${props => props.theme.mediaQueries.largest} {
        grid-gap: 3rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
        padding: 10rem 0;
        grid-gap: 2rem;
    }

    @media ${props => props.theme.mediaQueries.medium} {
        padding: 7rem 4rem;
        grid-gap: 4rem;
    }

    @media ${props => props.theme.mediaQueries.small} {
        max-width: 60%;
        padding: 3rem 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        & > *:not(:last-child) {
            margin-bottom: 5rem;
        }
    }
`

const StyledCard = styled.div`
    width: 100%;
    color: var(--white);
    background-color: var(--black);
    padding: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        width: 4rem;
        height: 4rem;
    }

    h3 {
        color: var(--white);
        font-size: 3.5rem;
        font-weight: 800;
        text-align: right;
        max-width: 90%;
        margin: 10rem 0 0 auto;
    }

    @media ${props => props.theme.mediaQueries.largest} {
        padding: 2rem;
    }

    @media ${props => props.theme.mediaQueries.larger} {
        h3 {
            font-size: 3.2rem;
        }
    }

    @media ${props => props.theme.mediaQueries.large} {
        padding: 1.5rem;

        h3 {
            font-size: 2.5rem;
        }
    }

    @media ${props => props.theme.mediaQueries.medium} {
        h3 {
            font-size: 3rem;
        }
    }

    @media ${props => props.theme.mediaQueries.small} {
        width: 37.5rem;
        height: 36rem;
    }

    @media ${props => props.theme.mediaQueries.smaller} {
        width: 30rem;
        height: 29rem;
    }

    @media ${props => props.theme.mediaQueries.smallest} {
    }
`

export const Image = ({ image, background }) => {
    return (
        <StyledImage background={background} image={image}>
            <div />
        </StyledImage>
    )
}

export const ServiceCard = ({ icon, title }) => {
    return (
        <StyledCard>
            <img src={icon} alt="Logo" />
            <h3>{title}</h3>
        </StyledCard>
    )
}
