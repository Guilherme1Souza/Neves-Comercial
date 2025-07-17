import React, { useState, useEffect } from "react";
import Image from "next/image";

import suvinil from "../../images/marcas/suvinil-logo.png";
import lorenzetti from "../../images/marcas/logo-lorenzetti.png";
import vedacit from "../../images/marcas/logo-vedacit.png";
import votorantim from "../../images/marcas/logo-votorantim.png";
import tramontina from "../../images/marcas/logo-tramontina.png";
import amanco from "../../images/marcas/logo-amanco.png";
import tresm from "../../images/marcas/logo-3m.png";

import { Container, Title, CarouselWrapper, ArrowButton, BrandCircle } from "./style";

const marcas = [
  { id: 1, name: "Suvinil", logo: suvinil },
  { id: 2, name: "Lorenzetti", logo: lorenzetti },
  { id: 3, name: "Vedacit", logo: vedacit },
  { id: 4, name: "Votorantim", logo: votorantim },
  { id: 5, name: "Tramontina", logo: tramontina },
  { id: 6, name: "Amanco", logo: amanco },
  { id: 7, name: "3M", logo: tresm },
];


function useVisibleBrands() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 485) setCount(2);      
      else if (w < 900) setCount(3);
      else setCount(6);               
    };

    calc(); 
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return count;
}

const Marcas = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBrands = useVisibleBrands();

  const next = () => {
    setStartIndex((prev) => (prev + 1) % marcas.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + marcas.length) % marcas.length);
  };

  const displayedBrands = marcas
    .concat(marcas) 
    .slice(startIndex, startIndex + visibleBrands);

  return (
    <Container>
      <Title>As marcas que fazem a diferença</Title>
      <CarouselWrapper>
        <ArrowButton onClick={prev}>←</ArrowButton>
        {displayedBrands.map((marca) => (
          <BrandCircle key={`${marca.id}-${startIndex}`}>
            <Image src={marca.logo} alt={marca.name} width={100} height={100} />
          </BrandCircle>
        ))}
        <ArrowButton onClick={next}>→</ArrowButton>
      </CarouselWrapper>
    </Container>
  );
};

export default Marcas;
