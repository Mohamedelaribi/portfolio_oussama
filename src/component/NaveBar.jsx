import React, { useState } from 'react';
import '../App.css';
import Logo from '../images/logoPKH.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function NaveBar() {
  const [navBar,setNavBar] = useState()
  return (
    <div className='navBar'>
        <ul className="listNavBar">
            <HashLink smooth to="/#AboutUs">
            <h3 className="listNavBar_li">Sobre Nosotros</h3>
            </HashLink>          
            <HashLink smooth to="/#ourService">
              <h3>Servicio</h3>
            </HashLink>  
            <img src={Logo} alt="Logo" className="logo" />
            <Link to="/Portfolio">
              <h3>Porfolio</h3>
              </Link>
            <HashLink to="/#ContactUs">
              <h3>Contact</h3>
              </HashLink>
          
        </ul>

    </div>
  )
}
