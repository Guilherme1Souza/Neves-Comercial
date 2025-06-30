import { useState, useRef, useEffect } from "react";
import departamentos from "@data/departamentos.json";
import Image from "next/image";
import BuscaNav from "../BuscaNav";
import { IoIosHelpCircleOutline, IoIosCall } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Logo from "../../icons/logo.svg";
import {
  HeaderWrapper,
  HeaderWrapperTwo,
  TopBar,
  LogoContainer,
  LogoText,
  HeaderContent,
  IconGroupDesktop,
  IconGroupMobile,
  IconItem,
  IconLabel,
  NavWrapper,
  NavItem,
  NavItemContent,
  SubNav,
  SubNavItem,
  ModuleWrapper,
  ModuleTitle,
  MobileMenuToggle,
  MobileMenu,
  DepartamentosMenu,
} from "./style";

export default function Header() {
  const [showSubnav, setShowSubnav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeptoMenuOpen, setIsDeptoMenuOpen] = useState(false);
  const subnavRef = useRef(null);
  
  // Fecha o subnav ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (subnavRef.current && !subnavRef.current.contains(e.target)) {
        setShowSubnav(false);
      }
    }

    // Adiciona o listener para fechar o subnav ao clicar fora
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderWrapper>
      <TopBar>
        Compre em nosso WhatsApp com os melhores descontos | (11) 54151-4561
      </TopBar>
      <HeaderContent>
        <HeaderWrapperTwo>
        <LogoContainer>
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <LogoText>
            NEVES<br />COMERCIAL
          </LogoText>
        </LogoContainer>
        <BuscaNav />
        </HeaderWrapperTwo>
        <IconGroupDesktop>
          <IconItem>
            <IoIosHelpCircleOutline size={24} color="#facc15" />
            <IconLabel>Central de ajuda</IconLabel>
          </IconItem>
          <IconItem>
            <IoIosCall size={24} color="#facc15" />
            <IconLabel>Canais de atendimento</IconLabel>
          </IconItem>
        </IconGroupDesktop>
        <MobileMenuToggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </MobileMenuToggle>
      </HeaderContent>
      <NavWrapper>
        <NavItem ref={subnavRef}>
          <NavItemContent onClick={() => setShowSubnav(!showSubnav)}>
            <RxHamburgerMenu size={20} />
            Todos os departamentos
          </NavItemContent>
          <SubNav show={showSubnav}>
            {departamentos.map((modulo) => (
              <ModuleWrapper key={modulo.modulo}>
                <ModuleTitle>{modulo.modulo}</ModuleTitle>
                {modulo.itens.map((dep) => (
                  <SubNavItem key={dep.slug}>{dep.nome}</SubNavItem>
                ))}
              </ModuleWrapper>
            ))}
          </SubNav>
        </NavItem>
        <NavItem>Revestimentos e Tintas</NavItem>
        <NavItem>Aquecedores</NavItem>
        <NavItem>Manutenção</NavItem>
        <NavItem>Iluminação</NavItem>
        <NavItem>Filtros</NavItem>
        <NavItem>Pisos</NavItem>
        <NavItem>Cascatas</NavItem>
        <NavItem>Nossas Lojas</NavItem>
      </NavWrapper>
      {isMobileMenuOpen && (
        <MobileMenu>
          <div onClick={() => setIsDeptoMenuOpen(true)}>
            Todos os Departamentos
          </div>
          <div>Revestimentos e Tintas</div>
          <div>Aquecedores</div>
          <div>Manutenção</div>
          <div>Iluminação</div>
          <div>Filtros</div>
          <div>Pisos</div>
          <div>Cascatas</div>
          <div>Nossas Lojas</div>
          <IconGroupMobile>
            <IconItem>
              <IoIosHelpCircleOutline size={24} color="#facc15" />
              <IconLabel>Central de ajuda</IconLabel>
            </IconItem>
            <IconItem>
              <IoIosCall size={24} color="#facc15" />
              <IconLabel>Canais de atendimento</IconLabel>
            </IconItem>
          </IconGroupMobile>
        </MobileMenu>
      )}
      {isDeptoMenuOpen && (
        <DepartamentosMenu>
          <button onClick={() => setIsDeptoMenuOpen(false)}>← Voltar</button>
          {departamentos.map((modulo) => (
            <div key={modulo.modulo}>
              <strong>{modulo.modulo}</strong>
              {modulo.itens.map((dep) => (
                <div key={dep.slug}>{dep.nome}</div>
              ))}
            </div>
          ))}
        </DepartamentosMenu>
      )}
    </HeaderWrapper>
  );
}
