import React, { useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { produtosAquecedores } from "@data/products/aquecedores";

const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 1rem;
  background-color: #f1f1f1;
`;

export const BoxProducts = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Titulo = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Line = styled.div`
  max-width: 2000px;
  height: 2px;
  margin: 2rem 0;
  background: ${({ theme }) => theme.colors.grayLight};
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  img {
    margin: 0 auto;
    max-width: 100%;
    height: 200px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;


const PrecoAtual = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: bold;
`;
const PrecoAntigo = styled.div`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1rem;
`;
const Botao = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.hover.primary};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  button {
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.hover.primary};
      color: ${({ theme }) => theme.colors.white};
    }
    &.active {
      background: ${({ theme }) => theme.hover.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default function AquecedoresPage() {
  const [ordem, setOrdem] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8;

  const produtosOrdenados = ordenar(produtosAquecedores, ordem);

  const totalPaginas = Math.ceil(produtosOrdenados.length / itensPorPagina);
  const indexInicial = (paginaAtual - 1) * itensPorPagina;
  const indexFinal = indexInicial + itensPorPagina;
  const produtosPaginados = produtosOrdenados.slice(indexInicial, indexFinal);

  function ordenar(lista, ordem) {
    if (!ordem) return lista;
    const parsePreco = (str) =>
      parseFloat(str.replace(/[^\d,]/g, "").replace(",", "."));
    const arr = [...lista];
    if (ordem === "menor-preco")
      return arr.sort(
        (a, b) => parsePreco(a.precoAtual) - parsePreco(b.precoAtual)
      );
    if (ordem === "maior-preco")
      return arr.sort(
        (a, b) => parsePreco(b.precoAtual) - parsePreco(a.precoAtual)
      );
    return arr;
  }

  return (
    <>
      <Container>
        <Header />
        <Line />
        <BoxProducts>
          <Titulo>Aquecedores</Titulo>

          <Controls>
            <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
              <option value="">Ordenar por</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </Controls>
          <Grid>
            {produtosPaginados.map((produto, index) => (
              <Card key={index}>
                <img src={produto.imagem.src} alt={produto.nome} />
                <p>{produto.nome}</p>
                <PrecoAtual>{produto.precoAtual}</PrecoAtual>
                <PrecoAntigo>{produto.precoAntigo}</PrecoAntigo>
                <Botao>COMPRAR</Botao>
              </Card>
            ))}
          </Grid>
          <Pagination>
            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                key={i + 1}
                className={paginaAtual === i + 1 ? "active" : ""}
                onClick={() => setPaginaAtual(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </Pagination>
        </BoxProducts>
      </Container>
      <Footer />
    </>
  );
}
