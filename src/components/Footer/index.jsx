"use client";

import React from "react";
import {
    Container,
    FooterWrapper,
    Column,
    Title,
    LinkItem,
    Text,
    SocialMedia,
    PaymentMethods,
    InfoSection,
    InfoContent,
    DeveloperBar,
} from "./style";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaCcVisa,
    FaCcMastercard,
} from "react-icons/fa";
import { SiPix } from "react-icons/si";

const Footer = () => {
    return (
        <>
            {/* Área Azul com links */}
            <Container>
                <FooterWrapper>
                    {/* Coluna 1 - Institucional */}
                    <Column>
                        <Title>Institucional</Title>
                        <LinkItem>Quem Somos</LinkItem>
                        <LinkItem>Nossas Lojas</LinkItem>
                        <LinkItem>Política de Trocas</LinkItem>
                        <LinkItem>Política de Devoluções</LinkItem>
                        <LinkItem>Política de Entregas</LinkItem>
                        <LinkItem>Dúvidas Frequentes</LinkItem>
                        <LinkItem>Trabalhe Conosco</LinkItem>
                    </Column>

                    {/* Coluna 2 - Contato */}
                    <Column>
                        <Title>Contato</Title>
                        <Text><FaPhoneAlt /> (11) 4329-8668 / WhatsApp: (11) 97487-7861 - Loja 1</Text>
                        <Text><FaPhoneAlt /> (11) 2208-0925 / WhatsApp: (11) 97503-4650 - Loja 2</Text>
                        <Text><FaPhoneAlt /> (11) 2198-5512 - Loja 3</Text>
                        <Text><FaEnvelope /> contato.neves-comercial@gmail.com</Text>
                        <Text><FaEnvelope /> trocas.neves-comercial@gmail.com</Text>
                        <Text><FaEnvelope /> devoluções.neves-comercial@gmail.com</Text>
                    </Column>

                    {/* Coluna 3 - Lojas */}
                    <Column>
                        <Title>Loja Matriz</Title>
                        <Text>Av. João Kubitscheck, 1266 - Centro/SP</Text>
                        <Text>Segunda a sexta das 08h às 17h, aos sábados das 09h às 14h.</Text>
                        <Title>Loja Centro</Title>
                        <Text>Av. João Kubitscheck, 1266 - Centro/SP</Text>
                        <Text>Segunda a sexta das 08h às 17h, aos sábados das 09h às 14h.</Text>
                    </Column>
                </FooterWrapper>
            </Container>

            <InfoSection>
                <InfoContent>
                    <div>
                        <Title>Formas de Pagamento</Title>
                        <PaymentMethods>
                            <FaCcVisa />
                            <FaCcMastercard />
                            <SiPix />
                        </PaymentMethods>
                    </div>
                    <div>
                        <p>Todos os direitos reservados © 2023 | Casa Mimosa Hidráulica e Acabamentos</p>
                        <p>CNPJ: 62.978.978/0001-80</p>
                    </div>
                    <div>
                        <Title>Redes Sociais</Title>
                        <SocialMedia>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://wa.me/5511974877861" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        </SocialMedia>
                    </div>
                </InfoContent>
            </InfoSection>
            <DeveloperBar>
                Desenvolvido por Guilherme Souza
            </DeveloperBar>
        </>
    );
};

export default Footer;
