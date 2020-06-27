import React from "react"

import ServiceImage from "../../content/services.png"
import Analytics from "../../content/icons/Analytics.png"
import Document from "../../content/icons/Document.png"
import People from "../../content/icons/People.png"
import Hourglass from "../../content/icons/Hourglass.png"

import { StyledSection, Info, Image, Content, ServiceCard } from "./styles"

const Services = () => {
    return (
        <StyledSection>
            <Info>
                <Content>
                    <ServiceCard icon={Document} title="Assessoria Fiscal." />
                    <ServiceCard
                        icon={Hourglass}
                        title="Assessoria Jurídica."
                    />
                    <ServiceCard
                        icon={People}
                        title="Assessoria de Gestão Pessoal."
                    />
                    <ServiceCard
                        icon={Analytics}
                        title="Assessoria Contabilística."
                    />
                </Content>
            </Info>
            <Image background image={ServiceImage} />
        </StyledSection>
    )
}

export default Services
