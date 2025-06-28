import { useState } from "react";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

const opcoesNav = [
  { nome: "Revestimentos e Tintas", slug: "revestimentos-e-tintas" },
  { nome: "Aquecedores", slug: "aquecedores" },
  { nome: "Manutenção", slug: "manutencao" },
  { nome: "Iluminação", slug: "iluminacao" },
  { nome: "Filtros", slug: "filtros" },
  { nome: "Pisos", slug: "pisos" },
  { nome: "Cascatas", slug: "cascatas" },
  { nome: "Nossas Lojas", slug: "lojas" },
];

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:focus-within {
    outline: 2px solid #000000;
    outline-offset: 2px;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.875rem;
  color: #000;

  &::placeholder {
    color: #6b7280;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 0.5rem;
  background-color: #fff;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 15rem;
  overflow-y: auto;
`;

const Item = styled.li`
  padding: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export default function BuscaNav() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const valor = e.target.value;
    setBusca(valor);

    if (valor.trim()) {
      const filtrados = opcoesNav.filter((item) =>
        item.nome.toLowerCase().includes(valor.toLowerCase())
      );
      setResultados(filtrados);
    } else {
      setResultados([]);
    }
  };

  const handleSelecionar = (slug) => {
    setBusca("");
    setResultados([]);
    router.push(`/${slug}`);
  };

  return (
    <Container>
      <SearchBox>
        <Input
          type="text"
          placeholder="Olá, o que você deseja pesquisar?"
          value={busca}
          onChange={handleChange}
        />
        <MagnifyingGlassIcon style={{ width: "20px", height: "20px", color: "#facc15" }} />
      </SearchBox>

      {resultados.length > 0 && (
        <Dropdown>
          {resultados.map((item) => (
            <Item key={item.slug} onClick={() => handleSelecionar(item.slug)}>
              {item.nome}
            </Item>
          ))}
        </Dropdown>
      )}
    </Container>
  );
}
