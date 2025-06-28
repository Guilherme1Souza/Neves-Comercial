import { useState, useEffect, useRef } from "react";
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

  &:hover, &.active {
    background-color: #f3f4f6;
  }
`;

export default function BuscaNav() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const router = useRouter();

  // Debounce para buscar só depois de 300ms parado
  useEffect(() => {
  const handler = setTimeout(() => {
    if (busca.trim()) {
      const filtrados = opcoesNav.filter((item) =>
        item.nome.toLowerCase().startsWith(busca.toLowerCase())
      );
      setResultados(filtrados);
      setShowDropdown(filtrados.length > 0);
    } else {
      setResultados([]);
      setShowDropdown(false);
    }
    setActiveIndex(-1);
  }, 300);

  return () => clearTimeout(handler);
}, [busca]);


  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
        setActiveIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navegação com teclado
  const handleKeyDown = (e) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < resultados.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : resultados.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < resultados.length) {
        handleSelecionar(resultados[activeIndex].slug);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setActiveIndex(-1);
    }
  };

  // Seleciona item ao clicar
  const handleSelecionar = (slug) => {
    setBusca("");
    setResultados([]);
    setShowDropdown(false);
    setActiveIndex(-1);
    router.push(`/${slug}`);
  };

  return (
    <Container ref={containerRef}>
      <SearchBox>
        <Input
          type="text"
          placeholder="Olá, o que você deseja pesquisar?"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onFocus={() => resultados.length > 0 && setShowDropdown(true)}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-activedescendant={
            activeIndex >= 0 ? `item-${activeIndex}` : undefined
          }
          role="combobox"
          aria-expanded={showDropdown}
        />
        <MagnifyingGlassIcon
          style={{ width: "20px", height: "20px", color: "#facc15" }}
          aria-hidden="true"
        />
      </SearchBox>

      {showDropdown && (
        <Dropdown role="listbox" id="search-results">
          {resultados.map((item, index) => (
            <Item
              key={item.slug}
              id={`item-${index}`}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleSelecionar(item.slug)}
              role="option"
              aria-selected={index === activeIndex}
              tabIndex={-1}
            >
              {item.nome}
            </Item>
          ))}
        </Dropdown>
      )}
    </Container>
  );
}
