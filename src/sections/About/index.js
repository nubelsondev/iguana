import React from "react"

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
            <Image
                background
                image={`https://ik.imagekit.io/nubelsondev/about_jTvWvxdwK.webp`}
            />
            <Info>
                <SectionTitle
                    title="Quem somos"
                    subtitle="A Iguana Lda, é uma empresa de direito privado,
                            constituída por capital 100% angolano, que atua no
                            mercado desde Junho de 2002."
                />

                <Content>
                    <ContentGroup>
                        <h3>Nossa filosofia</h3>
                        <p>
                            Somos vocacionados para o ramo de Consultoria
                            Diversa, Formação Profissional, Assessoria Fiscal,
                            Contabilística e Jurídica, Gestão do Pessoal, e
                            incubadora de empresas. Temos feito novas parcerias
                            e consórcios com empresas patenteadas no mercado
                            nacional e estrangeiro.
                        </p>
                        <p>
                            A nossa filosofia de distinção é a dedicação aos
                            nossos clientes, parceiros e colaboradores. 
                        </p>
                    </ContentGroup>
                    <ContentGroup invert>
                        <h3>Nosso objetivo</h3>
                        <p>
                            Atingir a médio prazo o cume do sucesso e com isso
                            melhorar a qualidade de vida dos cidadãos gerando
                            mais postos de trabalho e garantir a formação
                            profissional em diversas áreas de alguns ramos de
                            atividade.
                        </p>
                    </ContentGroup>
                </Content>
            </Info>
        </StyledSection>
    )
}

export default About
