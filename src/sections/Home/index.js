import React from "react"
import { Link } from "react-scroll"

import { StyledSection, Info, Image, HomeTitle } from "./styles"

const Home = () => {
    return (
        <StyledSection id="home">
            <Info>
                <HomeTitle>
                    <h1>
                        Dedicação Premium <br /> com o Cliente, Parceiros <br />{" "}
                        & Colaboradores.
                    </h1>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eget ex vehicula, vulputate diam vel,
                            ultrices mauris.
                        </p>
                        <Link to="about" spy={true} smooth={true}>
                            Saiba Mais
                        </Link>
                    </div>
                </HomeTitle>
            </Info>
            <Image
                image={`https://ik.imagekit.io/nubelsondev/home_EIEyT9xLfL9.webp`}
            />
        </StyledSection>
    )
}

export default Home
