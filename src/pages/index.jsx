import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #ebebeb; 
  padding: 1.5rem;
`;

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}
