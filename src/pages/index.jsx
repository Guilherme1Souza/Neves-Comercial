import Hero from "@/components/Hero";
import Header from "../components/Header";
import styled from "styled-components";
import Promocoes from "@/components/Promocoes";
import Marcas from "@/components/Marcas";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero/>
      <Promocoes />
      <Marcas />
      <Testimonials />
      <Footer />
    </Container>
  );
}
