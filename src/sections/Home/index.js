import React from "react"

import HomeImage from "../../content/home.png"

import { StyledSection, Info, Image, HomeTitle } from "./styles"

const Home = () => {
    return (
        <StyledSection>
            <Info>
                <HomeTitle>
                    <h1>
                        Dedicação Premium <br /> com o Cliente, Parceiros &
                        Colaboradores.
                    </h1>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eget ex vehicula, vulputate diam vel,
                            ultrices mauris.
                        </p>
                        <a href="#">Saiba Mais</a>
                    </div>
                </HomeTitle>
            </Info>
            <Image image={HomeImage} />
        </StyledSection>
    )
}

export default Home
