import React from 'react';
import '../App.css';
import Logo from '../images/logoPKH.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function NaveBar() {
  return (
    <div className='navBar'>
        <ul className="listNavBar">
            <HashLink smooth to="/#AboutUs">
            <h3 className="listNavBar_li">Sobre Nosotros</h3>
            </HashLink>          
            <HashLink smooth to="/#ourServece">
              <h3>Servicio</h3>
            </HashLink>  
            <img src={Logo} alt="Logo" className="logo" />
            <Link to="/Portfolio">
              <h3>Porfolio</h3>
              </Link>
            <Link to="/ContactUs">
              <h3>Contact</h3>
              </Link>
          
        </ul>

    </div>
  )
}
