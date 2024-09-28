import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`

  margin-top: 5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;  

const Container = styled.div`
  max-width: 1280px;
  min-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    min-width: 350px;
  }
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  padding: 2rem 0;
  padding-right: 4rem;
  @media (max-width: 768px) {
    padding-right: 1rem;
  }
`;

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  
  &:visited {
    color: inherit;
  }
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid black;
  margin: 0;
`;

const Footer = () => {
  return (
    <Wrapper>
      {/* <HorizontalLine /> */}
      <Container>
      <Logo>KG.</Logo>
      <Nav>
        <NavItem href="https://www.linkedin.com/in/kelly-g-b105b6159/" target="_blank">Linkedin</NavItem>
        <NavItem href="https://github.com/SiaoChi" target="_blank">Github</NavItem>
      </Nav>
      </Container>
    </Wrapper>
  );
};

export default Footer;
