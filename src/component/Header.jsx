import React from 'react'
import NaveBar from './NaveBar'
import videoBg from '../videos/production_id_3917513 (2160p).mp4'
export default function Header() {
  return (
    <div className='header'>
        <NaveBar/>
        <video src={videoBg} autoPlay loop muted>
        </video>
        <div className='headerTitle'>
          <h1>Hola, Somos KRH</h1>
          <p>Proveedor de servicios audiovisuales. Nos 
            aseguramos de garantizar la satisfacción de 
            nuestros clientes y proporcionar solo la mejor calidad 
            y trabajo creativo a mejor precio
          </p>
        </div>
    </div>
  )
}
