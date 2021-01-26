import React, {useRef, useContext, useEffect} from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../hooks/onClickOutside';
import {MenuContext} from '../context/navState';
import {SideMenu} from './SideMenu';

import logoW from '../assets/images/logo-w.png'
import '../assets/css/Menu.css'


const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: transparent none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-end;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
  justify-content: space-between !important;
  flex-direction: row-reverse;
`;

const MainMenu = () => {
    const node = useRef();
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('body-hidden');
        }
        if (!isMenuOpen) {
            document.body.classList.remove('body-hidden');
        }
    })

    return (
        <header ref={node}>
            <Navbar>
                <>
                    <div className="res-menu">
                        <input id="burger" type="checkbox"/>

                        <label htmlFor="burger">
                            <span/>
                            <span/>
                            <span/>
                        </label>

                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/works">Works</a></li>
                                <li><a href="/about">About Me</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <a href="/"><img src={logoW} alt="img" style={{width: '200px', marginRight:'25px'}}/></a>
                </>
            </Navbar>
            <SideMenu/>
        </header>
    );
};

export default MainMenu;