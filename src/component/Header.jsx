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
        </div>
    </div>
  )
}
