import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import {
  Container,
  Title,
  Subtitle,
  Card,
  ProductTitle,
  Price,
  OldPrice,
  BuyButton,
} from "./style";


import torneira1 from '../../images/promocoes/torneira.png';
import torneira2 from '../../images/promocoes/torneira.png';
import torneira3 from "../../images/promocoes/torneira.png";
import torneira4 from "../../images/promocoes/torneira.png";

const produtos = [
  {
    imagem: torneira1,
    nome: "Torneira para lavatório de mesa bica alta vite 220v",
    precoAtual: "R$ 399,99 à vista",
    precoAntigo: "R$ 450,00",
  },
  {
    imagem: torneira2,
    nome: "Torneira para lavatório de mesa bica alta vite 220v",
    precoAtual: "R$ 399,99 à vista",
    precoAntigo: "R$ 450,00",
  },
  {
    imagem: torneira3,
    nome: "Torneira para lavatório de mesa bica alta vite 220v",
    precoAtual: "R$ 399,99 à vista",
    precoAntigo: "R$ 450,00",
  },
  {
    imagem: torneira4,
    nome: "Torneira para lavatório de mesa bica alta vite 220v",
    precoAtual: "R$ 399,99 à vista",
    precoAntigo: "R$ 450,00",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function Promocoes() {
  return (
    <Container>
      <Title>Promoções Imperdíveis</Title>
      <Subtitle>Confira as promoções do mês!</Subtitle>
      <Slider {...settings}>
        {produtos.map((item, index) => (
          <Card key={index}>
           <Image src={item.imagem} alt={item.nome} style={{ objectFit: 'contain', margin: '3rem auto' }} />
            <ProductTitle>{item.nome}</ProductTitle>
            <Price>
              {item.precoAtual} <OldPrice>{item.precoAntigo}</OldPrice>
            </Price>
            <BuyButton>COMPRAR</BuyButton>
          </Card>
        ))}
      </Slider>
    </Container>
  );
}
