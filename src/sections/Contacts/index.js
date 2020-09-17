import React from "react"
import { IoIosArrowRoundUp } from "react-icons/io"

import {
    StyledSection,
    Image,
    Info,
    SectionTitle,
    Content,
    Footer,
    ScrollToTop,
    EmailButton,
} from "./styles"

const Contacts = () => {
    return (
        <StyledSection id="contacts">
            <Image
                background
                image={`https://ik.imagekit.io/nubelsondev/contact_O-1O7TZec.webp`}
            />
            <Info>
                <SectionTitle
                    title="Contactos"
                />

                <Content>
                    <div>
                        <p>Rua Camilo Pessanha, nº 28-B</p>
                        <p>Vila Alice - Rangel</p>
                        <p>Luanda, Angola</p>
                    </div>

                    <div>
                        <p> &#40; +244 &#41; 949 260 963</p>
                        <EmailButton href="mailto:geral@iguana.co.ao">
                            Email Us
                        </EmailButton>
                    </div>
                </Content>

                <Footer>
                    <p>
                        Copyright All Rights Reserved © 2020 <br /> Design and
                        Built by{" "}
                        <strong>
                            {" "}
                            <a
                                href="https://github.com/nubelsondev"
                                target="_blank"
                                rel="noreferrer"
                            >
                                nubelsondev
                            </a>{" "}
                        </strong>
                    </p>
                </Footer>

                <ScrollToTop to="home">
                    <IoIosArrowRoundUp size="4rem" color="#fff" />
                </ScrollToTop>
            </Info>
        </StyledSection>
    )
}

export default Contacts
