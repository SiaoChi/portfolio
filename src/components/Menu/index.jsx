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

const Logo = styled(Link)`
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

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const LinkedinLink = 'https://www.linkedin.com/in/kelly-g-b105b6159/';
  const GithubLink = 'https://github.com/SiaoChi';

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = useCallback((e, hashtag) => {
    setIsMobileMenuOpen(false);

    if (!hashtag) {
      // 如果沒有 hashtag，直接滾動到頁面頂部
      window.scrollTo(0, 0);
    } else {
      // 如果有 hashtag，使用原來的邏輯
      e.preventDefault();
      const isHomePage = window.location.pathname === '/';

      const scrollToElement = () => {
        const element = document.querySelector(hashtag);
        if (element) {
          const headerOffset = 100;
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
    }
  }, [navigate]);

  return (
    <Wrapper>
      <Container>
        <Logo to="/" onClick={() => handleMenuItemClick()}>KG.</Logo>
        <Nav>
          <NavItem to="/" onClick={(e) => handleMenuItemClick(e, '#about')}>About</NavItem>
          <NavItem to="/" onClick={(e) => handleMenuItemClick(e, '#work')}>Work</NavItem>
          <NavItem to="/project" onClick={() => handleMenuItemClick()}>Project</NavItem>
          <IconWrapper>
            <NavItem to={GithubLink} target='_blank'>
              <Icon src='./img/github.png' alt='github'/>
            </NavItem>
            <NavItem to={LinkedinLink} target='_blank'>
              <Icon src='./img/linkedin.png' alt='linkedin'/>
            </NavItem>
          </IconWrapper>
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
              <MobileMenuItem to="/project" onClick={() => handleMenuItemClick()}>Project</MobileMenuItem>
              <IconWrapper>
                <NavItem to={GithubLink} target='_blank'>
                  <Icon src='./img/github.png' alt='github'/>
                </NavItem>
                <NavItem to={LinkedinLink} target='_blank'>
                  <Icon src='./img/linkedin.png' alt='linkedin'/>
                </NavItem>
              </IconWrapper>
        </MobileMenu>

      </Container>
    </Wrapper>
  );
};

export default Menu;
