import { useState, useRef, useEffect } from "react";
import departamentos from "@data/departamentos.json";
import Link from "next/link";
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
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    console.log("Departamentos:", departamentos);
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
            <Link href={`#`} passHref>
              <IconLabel>Central de ajuda</IconLabel>
            </Link>
          </IconItem>
          <IconItem>
            <IoIosCall size={24} color="#facc15" />
            <Link href={`#`} passHref>
              <IconLabel>Canais de atendimento</IconLabel>
            </Link>
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
            {departamentos.departamentos.map((modulo) => (
              <ModuleWrapper key={modulo.modulo}>
                <ModuleTitle>{modulo.modulo}</ModuleTitle>
                {modulo.itens.map((dep) => (
                  <Link href={`/departamento/${dep.slug}`} passHref key={dep.slug}>
                    <SubNavItem>{dep.nome}</SubNavItem>
                  </Link>
                ))}
              </ModuleWrapper>
            ))}
          </SubNav>
        </NavItem>
        <Link href="/revestimentos-e-pisos" passHref>
          <div>Revestimentos e Pisos</div>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Aquecedores</NavItem>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Manutenção</NavItem>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Iluminação</NavItem>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Filtros</NavItem>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Pisos</NavItem>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Cascatas</NavItem>
        </Link>
        <Link href={`#`} passHref>
          <NavItem>Nossas Lojas</NavItem>
        </Link>
      </NavWrapper>
      {isMobileMenuOpen && (
        <MobileMenu>
          <div onClick={() => setIsDeptoMenuOpen(true)}>
            Todos os Departamentos
          </div>
          <Link href="/revestimentos-e-pisos" passHref>
            <div>Revestimentos e Pisos</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Aquecedores</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Manutenção</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Iluminação</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Filtros</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Pisos</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Cascatas</div>
          </Link>
          <Link href={`#`} passHref>
            <div>Nossas Lojas</div>
          </Link>
          <IconGroupMobile>
            <IconItem>
              <IoIosHelpCircleOutline size={24} color="#facc15" />
              <Link href={`#`} passHref>
                <IconLabel>Central de ajuda</IconLabel>
              </Link>
            </IconItem>
            <IconItem>
              <IoIosCall size={24} color="#facc15" />
              <Link href={`#`} passHref>
                <IconLabel>Canais de atendimento</IconLabel>
              </Link>
            </IconItem>
          </IconGroupMobile>
        </MobileMenu>
      )}
      {isDeptoMenuOpen && (
        <DepartamentosMenu>
          <button onClick={() => setIsDeptoMenuOpen(false)}>← Voltar</button>
          {departamentos.departamentos.map((modulo) => (
            <div key={modulo.modulo}>
              <strong>{modulo.modulo}</strong>
              {modulo.itens.map((dep) => (
                <Link href={`/departamento/${dep.slug}`} passHref key={dep.slug}>
                  <div>{dep.nome}</div>
                </Link>
              ))}
            </div>
          ))}
        </DepartamentosMenu>
      )}
    </HeaderWrapper>
  );
}
