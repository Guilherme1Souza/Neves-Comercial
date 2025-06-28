import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import BuscaNav from "../BuscaNav";
import styled from "styled-components";
import { IoIosHelpCircleOutline, IoIosCall } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../icons/logo.svg";


const HeaderWrapper = styled.header`
  background-color: #f9fafb;
`;

const TopBar = styled.div`
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem 0;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #facc15; 
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.475rem;
  white-space: nowrap; 
`;

const IconLabel = styled.span`
  color: #374151; 
  font-size: 0.875rem;
  line-height: 1; 
`;


const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #374151;
  padding: 0.75rem 0;
  border-top: 1px solid #e5e7eb;
  position: relative;
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600; 
  cursor: pointer;
  user-select: none;
`;


const SubNav = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: white;
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const SubNavItem = styled.div`
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  color: #374151;
  transition: background 0.2s;

  &:hover {
    background-color: #4e7dda; 
    color: white;
  }
`;

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
