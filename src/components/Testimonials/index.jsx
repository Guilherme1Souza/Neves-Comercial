"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  Container,
  Header,
  Title,
  Subtitle,
  StyledSlider,
  Card,
  Company,
  Text,
  Stars,
} from "./style";

import bk from "../../images/testimonials/burguer-king.png";

const Testimonials = () => {

  const testimonials = [
  {
    logo: bk,
    company: "Burger King",
    text: "Comprei todo o material para minha obra na Neves Comercial e não poderia estar mais satisfeito! O atendimento foi excelente, os preços são justos e a entrega chegou dentro do prazo. A qualidade do cimento fez toda a diferença na resistência da minha construção. Recomendo de olhos fechados para quem busca confiança e compromisso!",
    rating: 5
  },
  {
    logo: bk,
    company: "Burger King",
    text: "Comprei todo o material para minha obra na Neves Comercial e não poderia estar mais satisfeito! O atendimento foi excelente, os preços são justos e a entrega chegou dentro do prazo. A qualidade do cimento fez toda a diferença na resistência da minha construção. Recomendo de olhos fechados para quem busca confiança e compromisso!",
    rating: 5
  },
  {
    logo: bk,
    company: "Burger King",
    text: "Comprei todo o material para minha obra na Neves Comercial e não poderia estar mais satisfeito! O atendimento foi excelente, os preços são justos e a entrega chegou dentro do prazo. A qualidade do cimento fez toda a diferença na resistência da minha construção. Recomendo de olhos fechados para quem busca confiança e compromisso!",
    rating: 5
  },
  {
    logo: bk,
    company: "Burger King",
    text: "Comprei todo o material para minha obra na Neves Comercial e não poderia estar mais satisfeito! O atendimento foi excelente, os preços são justos e a entrega chegou dentro do prazo. A qualidade do cimento fez toda a diferença na resistência da minha construção. Recomendo de olhos fechados para quem busca confiança e compromisso!",
    rating: 5
  }
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,      
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container>
      <Header>
        <Title>Depoimentos</Title>
        <Subtitle>O que dizem os nossos clientes</Subtitle>
      </Header>

      <StyledSlider as={Slider} {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <Card>
              <Image
                src={item.logo}
                alt={item.company}
                width={150}
                height={100}
                style={{ height: "auto" }}
              />
               <Stars style={{ fontSize: "24px", color: "gold" }}>
                {"★".repeat(item.rating)}
              </Stars>
              <Company>{item.company}</Company>
              <Text>{item.text}</Text>
            </Card>
          </div>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default Testimonials;
