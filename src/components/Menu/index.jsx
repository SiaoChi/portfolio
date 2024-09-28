import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useCallback } from 'react';

const Wrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
`;  

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 1rem 3rem;
  @media (max-width: 1280px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    min-width: 350px;
    height: 80px;
  }
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin-right: 3rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  
  &:visited {
    color: inherit;
  }

  &:hover {
    color: #6B7280; 
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const LogoMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #fff;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }
`;

const MobileMenuItem = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  &:visited {
    color: inherit;
  }
`;

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = useCallback((e, hashtag) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const isHomePage = window.location.pathname === '/';

    const scrollToElement = () => {
      const element = document.querySelector(hashtag);
      if (element) {
        const headerOffset = 100; // 預留100px的菜單高度
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (isHomePage) {
      scrollToElement();
    } else {
      navigate('/');
      setTimeout(scrollToElement, 100);
    }
  }, [navigate]);

  return (
    <Wrapper>
      <Container>
        <Logo>KG.</Logo>
        <Nav>
          <NavItem to="/" onClick={(e) => handleMenuItemClick(e, '#about')}>About</NavItem>
          <NavItem to="/" onClick={(e) => handleMenuItemClick(e, '#work')}>Work</NavItem>
          <NavItem to="/project">Project</NavItem>
          <NavItem to='https://www.linkedin.com/in/kelly-g-b105b6159/' target='_blank'>Contact</NavItem>
        </Nav>

        <LogoMobile>KG.</LogoMobile>
        <MobileMenuButton onClick={toggleMenu}>
            <img 
                className='w-10' 
                src={isMobileMenuOpen ? './img/menu-close.svg' : './img/menu-open.svg'} 
                alt={isMobileMenuOpen ? 'close menu' : 'open menu'} 
            />
        </MobileMenuButton>

        <MobileMenu isOpen={isMobileMenuOpen}>
              <MobileMenuItem to="/" onClick={(e) => handleMenuItemClick(e, '#about')}>About</MobileMenuItem>        
              <MobileMenuItem to="/" onClick={(e) => handleMenuItemClick(e, '#work')}>Work</MobileMenuItem>
              <MobileMenuItem to="/project" onClick={toggleMenu}>Project</MobileMenuItem>
              <MobileMenuItem href='https://www.linkedin.com/in/kelly-g-b105b6159/' target='_blank'>Contact</MobileMenuItem>
        </MobileMenu>

      </Container>
    </Wrapper>
  );
};

export default Menu;
