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
            <Container>
                <FooterWrapper>
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
                    <Column>
                        <Title>Contato</Title>
                        <Text><FaPhoneAlt /> (11) 4329-8668 / WhatsApp: (11) 97487-7861 - Loja 1</Text>
                        <Text><FaPhoneAlt /> (11) 2208-0925 / WhatsApp: (11) 97503-4650 - Loja 2</Text>
                        <Text><FaEnvelope /> eduardo@nevescomercial.com.br</Text>
                        <Text><FaEnvelope /> aldo@nevescomercial.com.br</Text>
                        <Text><FaEnvelope /> financeiro@nevescomercial.com.br</Text>
                    </Column>
                    <Column>
                        <Title>Loja Vila Dionísia</Title>
                        <Text>Rua Gomes Leal, 570 - Vila Dionísia - São Paulo, SP, 02671-090</Text>
                        <Text>Segunda a sexta das 08h às 18h, aos sábados das 08h às 13h.</Text>
                        <Title>Loja Parque Mandaqui</Title>
                        <Text>Rua Alfredo Zumkeller, 645 - Parque Mandaqui - São Paulo, SP, 02421-070</Text>
                        <Text>Segunda a sexta das 08h às 18h, aos sábados das 08h às 13h.</Text>
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
