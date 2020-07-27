import React, { useState } from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    width: 100%;
    color: var(--white);
    background-color: var(--primary);
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

    ${({ state }) =>
        state === false &&
        `
        z-index: 5;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--secondary);

        img{
            margin-bottom: 10rem;
        }

        div{
            font-size: 2rem;

            p{
                margin-bottom: 1rem;
            }

            ul{
                margin-left: 3rem;
            }
        }

        h3{
            max-width: 45%;
        }

    `}

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

        ${({ state }) =>
            state === false &&
            `
            width: 90vw;
            height: 100%;

            div{
            font-size: 1.8rem;
            }

            h3{
            max-width: 60%;
            }
        `}
    }

    @media ${props => props.theme.mediaQueries.smaller} {
        width: 30rem;
        height: 29rem;

        ${({ state }) =>
            state === false &&
            `
        width: 90vw;
        height: 100%;
        `}
    }
`

const ServiceCard = ({ icon, title, children }) => {
    const [cardClose, setCardClose] = useState(true)

    const toggleCardStatus = () => {
        cardClose ? setCardClose(false) : setCardClose(true)
    }

    return (
        <StyledCard state={cardClose} onClick={toggleCardStatus}>
            {cardClose ? (
                <>
                    {" "}
                    <img src={icon} alt="Logo" />
                    <h3>{title}</h3>{" "}
                </>
            ) : (
                <>
                    {" "}
                    <img src={icon} alt="Logo" />
                    <div>{children}</div>
                    <h3>{title}</h3>{" "}
                </>
            )}
        </StyledCard>
    )
}

export default ServiceCard
