import React, { useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { produtosRevestimentos } from "@/../data/produtosRevestimentos";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;
const Titulo = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #3b82f6;
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
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;
const PrecoAtual = styled.div`
  color: #111827;
  font-size: 1.2rem;
  font-weight: bold;
`;
const PrecoAntigo = styled.div`
  text-decoration: line-through;
  color: #9ca3af;
  margin-bottom: 1rem;
`;
const Botao = styled.button`
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  transition: 0.3s;
  &:hover {
    background: #2563eb;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  button {
    padding: 0.5rem 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #3b82f6;
      color: #fff;
    }
    &.active {
      background: #3b82f6;
      color: #fff;
    }
  }
`;

export default function RevestimentosePisos() {
  const [ordem, setOrdem] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8; 

  const produtosOrdenados = ordenar(produtosRevestimentos, ordem);

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
      <Header />
      <Container>
        <Titulo>Revestimentos e Pisos</Titulo>
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
      </Container>
      <Footer />
    </>
  );
}
