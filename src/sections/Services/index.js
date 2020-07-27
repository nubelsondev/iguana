import React from "react"

import Analytics from "../../content/icons/Analytics.png"
import Document from "../../content/icons/Document.png"
import People from "../../content/icons/People.png"
import Hourglass from "../../content/icons/Hourglass.png"

import { StyledSection, Info, Image, Content } from "./styles"

import ServiceCard from "../../components/ServiceCard"

const Services = () => {
    return (
        <StyledSection id="services">
            <Info>
                <Content>
                    <ServiceCard icon={Document} title="Assessoria Fiscal.">
                        <p>
                            Consciente das alterações permanentes e complexidade
                            crescente que se verificam no domínio da área
                            fiscal, a Iguana Lda, coloca à disposição dos seus
                            Clientes um conjunto de serviços que permite dar
                            resposta às necessidades das organizações, em
                            matéria fiscal:
                        </p>
                        <ul>
                            <li>Planeamento e prudência fiscal</li>
                            <li>Auditoria fiscal</li>
                            <li>
                                Elaboração e revisão das declarações fiscais
                            </li>
                            <li>Aconselhamento fiscal</li>
                            <li>Estudos de enquadramento fiscal</li>
                            <li>Diagnóstico de situações fiscais</li>
                        </ul>
                    </ServiceCard>

                    <ServiceCard icon={Hourglass} title="Assessoria Jurídica.">
                        <p>
                            Assessoria jurídica nas áreas civil, trabalhista,
                            legislativa e de meio ambiente oferecendo
                            orientações por meio de pareceres jurídicos e
                            realizando a interposição de medidas judiciais de
                            interesse colectivo e não só:
                        </p>

                        <ul>
                            <li>Elaboração de projectos</li>
                            <li>Prestação de apoio jurídico</li>
                        </ul>
                    </ServiceCard>

                    <ServiceCard
                        icon={People}
                        title="Assessoria de Gestão Pessoal."
                    >
                        <p>
                            Serviços especializados em Gestão de Pessoas nas
                            seguintes linhas de actuação:
                        </p>

                        <ul>
                            <li>Recrutamento e selecção</li>
                            <li>Processamento de salario e remuneração</li>
                            <li>Avaliação de desempenho</li>
                            <li>Pesquisa de clima organizacional</li>
                            <li>Pesquisa de satisfação do cliente</li>
                            <li>Pesquisa de plano de carreiras</li>
                            <li>
                                Consultoria e terceirização de recursos humanos
                            </li>
                        </ul>
                    </ServiceCard>

                    <ServiceCard
                        icon={Analytics}
                        title="Assessoria Contabilística."
                    >
                        <p>
                            Ajuda as organizações a serem mais competitivas
                            desenvolvendo um eficiente sistema de informação.
                        </p>

                        <h4>Informações internas</h4>
                        <p>
                            Fluxo financeiro, contabilidade, recursos humanos,
                            fiscal, produção, inventário, contas a pagar,
                            cobrança, cadastro, indicações de frequências de
                            pessoal e outros.
                        </p>

                        <h4>Informações Externas</h4>
                        <p>
                            Informação do mercado, da concorrência, perspetivas
                            e outros.
                        </p>
                    </ServiceCard>
                </Content>
            </Info>
            <Image
                background
                image={`https://ik.imagekit.io/nubelsondev/service_KWdUDTXXk2.webp`}
            />
        </StyledSection>
    )
}

export default Services
