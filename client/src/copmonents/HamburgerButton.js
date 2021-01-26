import React, {useContext} from 'react';
import styled from 'styled-components';
import {MenuContext} from '../context/navState';

import logoW from '../assets/images/logo-w.png'
import '../assets/css/Menu.css'


const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  //:focus {
  //  border: medium none rgb(250,157,46);
  //  box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
  //  outline: 0;
  //}

  :hover {
    span:nth-of-type(1) {
      width: 36px;
    }

    span:nth-of-type(2) {
      width: 43px;
    }

    span:nth-of-type(3) {
      width: 33px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  }
`;

const Bar1 = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 7px;
  background-color: #fff;
`;

const Bar2 = styled.span`
  display: block;
  width: 35px;
  height: 3px;
  margin-bottom: 7px;
  background-color: #fff;
`;

const Bar3 = styled.span`
  display: block;
  width: 45px;
  height: 3px;
  margin-bottom: 7px;
  background-color: #fff;
`;


const HamburgerButton = () => {
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    // return (
    //     // <>
    //     //     <div className="res-menu">
    //     //         <input id="burger" type="checkbox"/>
    //     //
    //     //         <label for="burger">
    //     //             <span></span>
    //     //             <span></span>
    //     //             <span></span>
    //     //         </label>
    //     //
    //     //         <nav>
    //     //             <ul>
    //     //                 <li><a href="/">Home</a></li>
    //     //                 <li><a href="/about">About</a></li>
    //     //                 <li><a href="/works">Works</a></li>
    //     //                 <li><a href="/contact">Contact</a></li>
    //     //             </ul>
    //     //         </nav>
    //     //     </div>
    //     //     <a href="/"><img src={logoW} alt="img" style={{width: '200px'}}/></a>
    //     //
    //     //
    //     // </>
    // );
};

export default HamburgerButton;