import React, { useState } from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { IoMdMenu, IoMdClose } from "react-icons/io"

const MenuButton = styled.div`
    width: 7rem;
    height: 7rem;
    background-color: var(--white);
    cursor: pointer;

    position: fixed;
    right: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ state }) =>
        state === "open" &&
        `
        background-color: var(--primary);
        overflow: hidden;
    `}

    @media ${props => props.theme.mediaQueries.larger} {
        width: 6rem;
        height: 6rem;
    }

    @media ${props => props.theme.mediaQueries.large} {
        width: 5rem;
        height: 5rem;
    }

    @media ${props => props.theme.mediaQueries.small} {
        width: 4rem;
        height: 4rem;
    }
`

const Background = styled.div`
    width: 7rem;
    height: 7rem;
    position: fixed;
    right: 0;
    z-index: 8;
    background-color: var(--black);
    opacity: 0.9;

    ${({ state }) =>
        state === "open" &&
        `
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    `}

    @media ${props => props.theme.mediaQueries.larger} {
        width: 6rem;
        height: 6rem;

        ${({ state }) =>
            state === "open" &&
            `
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    `}
    }

    @media ${props => props.theme.mediaQueries.large} {
        width: 5rem;
        height: 5rem;

        ${({ state }) =>
            state === "open" &&
            `
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    `}
    }

    @media ${props => props.theme.mediaQueries.medium} {
        ${({ state }) =>
            state === "open" &&
            `
            display: none;
        `}
    }

    @media ${props => props.theme.mediaQueries.small} {
        width: 4rem;
        height: 4rem;
    }
`

const MenuContent = styled.div`
    width: 7rem;
    height: 7rem;
    background-color: var(--white);
    position: fixed;
    right: 0;
    z-index: 9;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    ${({ state }) =>
        state === "open" &&
        `
        width: 50%;
        height: 100vh;
        overflow: hidden;
    `}

    @media ${props => props.theme.mediaQueries.larger} {
        width: 6rem;
        height: 6rem;

        ${({ state }) =>
            state === "open" &&
            `
        width: 50%;
        height: 100vh;
        overflow: hidden;
    `}
    }

    @media ${props => props.theme.mediaQueries.large} {
        width: 5rem;
        height: 5rem;

        ${({ state }) =>
            state === "open" &&
            `
        width: 50%;
        height: 100vh;
        overflow: hidden;
    `}
    }

    @media ${props => props.theme.mediaQueries.medium} {
        align-items: center;
        text-align: center;

        ${({ state }) =>
            state === "open" &&
            `
            width: 100vw;
            height: 100vh;
        `}
    }

    @media ${props => props.theme.mediaQueries.small} {
        width: 4rem;
        height: 4rem;

        ${({ state }) =>
            state === "open" &&
            `
            width: 100vw;
            height: 100vh;
        `}
    }
`

const MenuList = styled.ul`
    list-style: none;

    .active {
        color: var(--primary);
        text-decoration: underline;
    }


    li {
        font-size: 6.4rem;
        font-weight: 700;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
            color: var(--primary);
        }
    }

    ${({ state }) =>
        state === "closed" &&
        `
            display: none;
        `}

    ${({ state }) =>
        state === "open" &&
        `
            padding: 7rem;
        `}

        @media ${props => props.theme.mediaQueries.large}{
            li{
                font-size: 5rem;
            }
        }

        @media ${props => props.theme.mediaQueries.medium}{
            font-size: 4.5rem;
        }

        @media ${props => props.theme.mediaQueries.small}{
            font-size: 3rem;
        }
`

const Menu = () => {
    const [menuState, setMenuState] = useState("closed")

    const toggleMenuState = () => {
        menuState === "closed" ? setMenuState("open") : setMenuState("closed")
    }

    return (
        <>
            <MenuButton state={menuState} onClick={toggleMenuState}>
                {menuState === "closed" ? (
                    <IoMdMenu size="3.5rem" color="#F27924" />
                ) : (
                    <IoMdClose size="3.5rem" color="#fff" />
                )}
            </MenuButton>
            <Background state={menuState} />
            <MenuContent state={menuState}>
                <MenuList state={menuState}>
                    <li>
                        <Link to="home" spy={true} smooth={true}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true}>
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Link to="services" spy={true} smooth={true}>
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link to="contacts" spy={true} smooth={true}>
                            Contactos
                        </Link>
                    </li>
                </MenuList>
            </MenuContent>
        </>
    )
}

export default Menu
