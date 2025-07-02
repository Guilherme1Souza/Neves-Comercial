import Hero from "@/components/Hero";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero/>
    </Container>
  );
}
