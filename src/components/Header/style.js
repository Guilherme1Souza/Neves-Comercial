import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #ebebeb;
  width: 100%;
`;

export const TopBar = styled.div`
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem ;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }
`;

export const HeaderWrapperTwo = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;  
  gap: 9.8rem;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
  }
`;

export const LogoText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.2rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #facc15;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.475rem;
  white-space: nowrap;
`;

export const IconGroupDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #facc15;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconGroupMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #facc15;
    margin-top: 2rem;
  }
`;

export const IconLabel = styled.span`
  color: #374151;
  font-size: 0.875rem;
  line-height: 1;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  font-size: 0.875rem;
  color: #374151;
  padding: 0.75rem 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export const SubNav = styled.div`
  display: ${({ show }) => (show ? "grid" : "none")};
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  position: absolute;
  top: 2.5rem;
  left: -4rem;
  background: white;
  padding: 1.5rem 2rem;
  width: max-content;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1100;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ModuleTitle = styled.strong`
  font-size: 1.1rem;
  color: #0c4a6e;
  font-weight: 700;
  margin-bottom: 0.5rem;
  padding-bottom: 0.15rem;
  border-bottom: 3px solid #facc15;
`;

export const SubNavItem = styled.div`
  font-size: 0.9rem;
  color: #1e293b;
  cursor: pointer;
  padding: 0.15rem 0;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 4rem;
    right: 1rem;
    z-index: 2000;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 2rem;
    z-index: 1500;
    gap: 1rem;
    font-size: 1.1rem;
    color: #1e293b;
  }
`;

export const DepartamentosMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background: #f9fafb;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 2rem;
    z-index: 1600;
    gap: 1rem;
    overflow-y: auto;

    button {
      align-self: flex-start;
      background: none;
      border: none;
      font-size: 1rem;
      color: #2563eb;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    strong {
      color: #0c4a6e;
      margin-top: 1rem;
      margin-bottom: 0.3rem;
    }

    div {
      padding-left: 0rem;

      &:hover {
        color: #0c4a6e;
      }
    }
  }
`;
