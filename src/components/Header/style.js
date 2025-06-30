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
  padding: 0.5rem 0;
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
`;

export const LogoText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  align-items: center;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #facc15;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.475rem;
  white-space: nowrap;
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
