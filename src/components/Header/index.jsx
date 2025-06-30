import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import BuscaNav from "../BuscaNav";
import { IoIosHelpCircleOutline, IoIosCall } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../icons/logo.svg";
import {
  HeaderWrapper,
  TopBar,
  LogoContainer,
  LogoText,
  HeaderContent,
  IconGroup,
  IconItem,
  IconLabel,
  NavWrapper,
  NavItem,
  NavItemContent,
  SubNav,
  SubNavItem,
} from "./style";


export default function Header() {

  const [showSubnav, setShowSubnav] = useState(false);
  const subnavRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (subnavRef.current && !subnavRef.current.contains(e.target)) {
        setShowSubnav(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderWrapper>
      <TopBar>
        Compre em nosso WhatsApp com os melhores descontos | (11) 54151-4561
      </TopBar>
      <HeaderContent>
        <LogoContainer>
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <LogoText>
            NEVES<br />COMERCIAL
          </LogoText>
        </LogoContainer>
        <BuscaNav />
        <IconGroup>
          <IconItem>
            <IoIosHelpCircleOutline size={24} color="#facc15" />
            <IconLabel>Central de ajuda</IconLabel>
          </IconItem>
          <IconItem>
            <IoIosCall size={24} color="#facc15" />
            <IconLabel>Canais de atendimento</IconLabel>
          </IconItem>
        </IconGroup>
      </HeaderContent>
      <NavWrapper>
        <NavItem ref={subnavRef}>
          <NavItemContent onClick={() => setShowSubnav(!showSubnav)}>
            <RxHamburgerMenu size={20} />
            Todos os departamentos
          </NavItemContent>
          <SubNav show={showSubnav}>
            <SubNavItem>Hidráulica</SubNavItem>
            <SubNavItem>Elétrica</SubNavItem>
            <SubNavItem>Jardinagem</SubNavItem>
            <SubNavItem>Construção</SubNavItem>
            <SubNavItem>Piscina</SubNavItem>
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

    </HeaderWrapper>
  );
}
