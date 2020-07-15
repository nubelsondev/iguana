import styled from "styled-components"

export const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
`

export const Logo = styled.img`
    width: 24.2rem;
    height: 17.1rem;

    position: absolute;
    top: 5rem;
    left: 5rem;

    @media ${props => props.theme.mediaQueries.larger} {
        transform: scale(0.9);
        top: 2rem;
        left: 2rem;
    }

    @media ${props => props.theme.mediaQueries.medium} {
        z-index: 5;
        left: 50%;
        top: 15rem;
        transform: translateX(-50%);
    }

    @media ${props => props.theme.mediaQueries.smarter} {
        top: 8rem;
    }

    @media ${props => props.theme.mediaQueries.smartest} {
        top: 3rem;
    }
`

export const Info = styled.div`
    width: 50%;
    height: 100%;
    padding: 7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.mediaQueries.largest} {
        padding: 5rem;
    }

    @media ${props => props.theme.mediaQueries.larger} {
        padding: 3rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
        padding: 2rem;
    }

    @media ${props => props.theme.mediaQueries.medium} {
        position: absolute;
        padding: 5rem;
        width: 100%;
        height: 100vh;
        z-index: 2;
    }

    @media ${props => props.theme.mediaQueries.small} {
        padding: 3rem;
    }

    @media ${props => props.theme.mediaQueries.smallest} {
        padding: 1rem;
    }
`

export const Image = styled.div`
    width: 50%;
    height: 100%;

    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: left;

    @media ${props => props.theme.mediaQueries.medium} {
        width: 100%;
        height: 100vh;

        &::before {
            content: "";
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            -webkit-backdrop-filter: blur(5px); /* apply the blur */
            backdrop-filter: blur(5px); /* apply the blur */
            pointer-events: none; /* make the pseudo class click-through */
        }
    }
`

export const HomeTitle = styled.div`
    width: 100%;

    h1 {
        font-size: 6.4rem;
        margin-bottom: 1rem;
    }

    div {
        max-width: 80%;
        margin: 0 0 0 auto;
        text-align: right;

        p {
            margin-bottom: 4rem;
        }

        a {
            color: var(--white);
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--primary);
            padding: 1.6rem 2.6rem;
            display: inline-block;
            cursor: pointer;
        }
    }

    @media ${props => props.theme.mediaQueries.largest} {
        h1 {
            font-size: 5.5rem;
        }
    }

    @media ${props => props.theme.mediaQueries.larger} {
        h1 {
            font-size: 5.3rem;
        }
    }

    @media ${props => props.theme.mediaQueries.large} {
        h1 {
            font-size: 4rem;
        }
    }

    @media ${props => props.theme.mediaQueries.medium} {
        color: var(--white);
        text-align: center;

        h1 {
            color: var(--white);
        }

        div {
            text-align: center;
            max-width: 100%;
            margin: 0;
        }
    }

    @media ${props => props.theme.mediaQueries.smaller} {
        h1 {
            font-size: 3.5rem;
        }
    }

    @media ${props => props.theme.mediaQueries.smallest} {
        h1 {
            font-size: 3rem;
        }
    }
`
