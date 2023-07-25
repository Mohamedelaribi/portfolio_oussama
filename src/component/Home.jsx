import React from 'react'
import Header from './Header'
import imageAboutUs from '../images/aboutUsImage.png'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className='main'>
          <div className='aboutUs'>
            <div className="leftContent">
              <div className='imageShodow'>
              <img src={imageAboutUs} alt="Sobre Nosotros" />
              </div>
               
            </div>
            <div className="rightContent">
              <h2 className="aboutUsTitle" id='AboutUs'>
                Sobre Nosotros
              </h2>
            </div>
            
          </div>
        </div>
    </div>
  )
}
