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
`
export const Content = styled.div`
    position: relative;

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

export const Image = ({ image, background }) => {
    return (
        <StyledImage background={background} image={image}>
            <div />
        </StyledImage>
    )
}
