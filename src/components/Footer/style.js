import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding-block: 40px;

  @media (max-width: 600px) {
    padding-inline: 20px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 220px;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const LinkItem = styled.p`
  margin-bottom: 10px;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.8rem;
  margin-bottom: 20px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
  }
`;

export const InfoSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 20px 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  p {
    margin: 5px 0;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const DeveloperBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 4px 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
`;
