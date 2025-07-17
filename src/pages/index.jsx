import Hero from "@/components/Hero";
import Header from "../components/Header";
import styled from "styled-components";
import Promocoes from "@/components/Promocoes";
import Marcas from "@/components/Marcas";
import Testimonials from "@/components/Testimonials";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero/>
      <Promocoes />
      <Marcas />
      <Testimonials />
    </Container>
  );
}
