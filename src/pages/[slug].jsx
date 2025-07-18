// Este arquivo é usado para lidar com rotas dinâmicas no Next.js, especificamente para páginas de categoria.
import { useRouter } from "next/router";
import styled from "styled-components";
import RevestimentosePisos from "@/pages/revestimentos-e-pisos";

const Container = styled.div`
  padding: 1.5rem;
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Texto = styled.p`
  margin-top: 0.5rem;
`;

export default function PaginaCategoria() {
  const router = useRouter();
  const { slug } = router.query;

   if (!slug) return null;

  if (slug === "revestimentos-e-pisos") {
    return <RevestimentosePisos />;
  }

  return (
    <Container>
      <Titulo>Você está em: {slug}</Titulo>
      <Texto>Conteúdo da categoria {slug}.</Texto>
    </Container>
  );
}
