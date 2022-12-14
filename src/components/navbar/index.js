import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {Nav,NavbarContainer,NavLogo ,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const logo = require("../../images/Logo.svg").default;

const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(true)

    const changeNav = () =>
    {
        if(window.scrollY>=80)
        {
            setScrollNav(false)
        }
        else
        {
            setScrollNav(true)
        }
    }

    useEffect(() =>
    {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome =() =>
    {
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value={{color:"#fff"}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                <img src={logo} alt='logo' style={{"height":"50px","margin-right":"20px"}}></img>
                Grammered
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Sign Up</NavLinks>
                </NavItem>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;