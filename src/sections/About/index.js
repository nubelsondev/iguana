import React from "react"

import AboutImage from "../../content/about.webp"

import {
    StyledSection,
    Image,
    Info,
    SectionTitle,
    Content,
    ContentGroup,
} from "./styles"

const About = () => {
    return (
        <StyledSection id="about">
            <Image background image={AboutImage} />
            <Info>
                <SectionTitle
                    title="Quem somos"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget ex vehicula, vulputate diam vel, ultrices mauris."
                />

                <Content>
                    <ContentGroup>
                        <h3>Nossa filosofia</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur commodo lectus quis tellus
                            vestibulum, in facilisis lacus rhoncus. Quisque leo
                            nisl, porta sed suscipit id, sollicitudin vel
                            libero. Phasellus ut porttitor risus. Integer vitae
                            bibendum turpis. Cras accumsan suscipit cursus.
                            Phasellus malesuada posuere lobortis.
                        </p>
                        <p>
                            Curabitur ac dolor vel nibh viverra ullamcorper at
                            id ipsum. Nulla facilisi. Donec ultricies, justo et
                            eleifend pulvinar, elit enim porttitor lorem, sit
                            amet bibendum nibh velit nec metus. Quisque
                            venenatis sollicitudin quam sit amet semper. Nam eu
                            leo et justo egestas viverra ac non libero.
                        </p>
                    </ContentGroup>
                    <ContentGroup invert>
                        <h3>Nosso objetivo</h3>
                        <p>
                            Morbi quis iaculis massa, feugiat ornare quam. Cras
                            massa nisi, accumsan lacinia est eget, faucibus
                            cursus metus. Proin ac tempus velit, ut lacinia
                            nisi. Nunc dapibus mollis dolor in tincidunt. Cras
                            feugiat sit amet arcu quis malesuada. Nunc ut
                            convallis risus. Quisque nisi nulla, fringilla sed
                            porta eu, gravida non ex.
                        </p>
                        <p>
                            Ut magna velit, dignissim non felis non, ullamcorper
                            porttitor turpis. Nunc a ultricies tellus. Nunc
                            dignissim nulla justo, ut efficitur leo lobortis
                            nec. Ut porttitor, eros in pulvinar fringilla, augue
                            tellus mollis tortor, eget interdum nunc mi eget
                            justo. Pellentesque ultrices porttitor eros vitae
                            sollicitudin.
                        </p>
                    </ContentGroup>
                </Content>
            </Info>
        </StyledSection>
    )
}

export default About
