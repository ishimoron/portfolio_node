import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {MenuContext} from '../context/navState';
import '../assets/css/Links.css'


const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 200;
  display: block;
  width: 100%;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #19181A;
  transform: translateX(-100%);
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  //height: 900px;
  
  ${props =>
          props.open &&
          css`
            transform: translateX(0);
          `}
`;


export const SideMenu = ({children}) => {
    const {isMenuOpen} = useContext(MenuContext);


    return <Menu open={isMenuOpen}><span>{children}</span></Menu>;
};


SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <div className="links-wrapper">
            <a className="links-effect transition-fade" href="/">Home</a>
            <a className="links-effect transition-fade" href="/about">About</a>
            <a className="links-effect transition-fade" href="/works">Works</a>
            <a className="links-effect transition-fade" href="/contact">Contact</a>
        </div>
    ),
};