import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: rgba(44, 62, 80, 0.8);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0.5em 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.div`
  color: #ecf0f1;
  font-size: 1.5em;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => (props.$isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100%;
    background-color: rgba(44, 62, 80, 0.95);
    flex-direction: column;
    justify-content: center;
    transition: left 0.3s ease;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  display: block;
  color: #ecf0f1;
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 0.875em;
  font-weight: 600;
  position: relative;
  cursor: pointer; /* Add cursor pointer */

  &:hover {
    color: #f39c12;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f39c12;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  color: #ecf0f1;
  font-size: 2em;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`;

const CloseIconContainer = styled.div`
  display: none; /* Initially hidden */
  justify-content: flex-end;
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  position: absolute;
  top: 10px;
  right: 10px;

  @media (max-width: 768px) {
    display: flex; /* Only show on mobile */
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #ecf0f1;
  font-size: 2em;
  cursor: pointer;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <LogoImage src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
          <LogoText>Arish's Portfolio</LogoText>
        </NavLogo>
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>
        <NavMenu $isOpen={isOpen}>
          <CloseIconContainer>
            <CloseIcon onClick={toggleMenu} />
          </CloseIconContainer>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="education" smooth={true} duration={500} onClick={toggleMenu}>Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
