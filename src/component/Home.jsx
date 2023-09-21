import React from 'react'
import Header from './Header'
import imageAboutUs from '../images/aboutUsImage.png'
import serviceImage1 from '../images/serviceImage1.png'
import serviceImage2 from '../images/serviceImage2.png'
import serviceImage3 from '../images/serviceImage3.png'
import videoGraphy from '../images/videografia.png'
import { Link } from 'react-router-dom'
export default function Home() {

  const sercices = 
  [
    {
    id:1 , imageUrl:serviceImage1, description:'Estamos convencidos de proporcionarle una producción musical de alta calidad a un precio muy asequible',
    },
    {
    id:2 , imageUrl:serviceImage2, description:'Realizamos todo tipo de servicios de fotografía adaptándonos en todo momento a sus necesidades. Le sorprenderá nuestros resultados!!',
    },
    {
    id:2 , imageUrl:serviceImage3, description:'Nos apasiona nuestra profesión y le transmitimos nuestra pasión a lo que hacemos. Como son videos pub, videoclips, cortos etc…',
    },
  ]
  const moreInfos  = 
  [
    {
    id:1 , title:"Quienes somos ", description:'Ganarnos la confianza de nuestras clientes garantizando enfciencia y calidad al mijor',
    },
    {
    id:2 , title:"Nuestra Vision", description:'Nos Aseguramos al 100% de nuestras formas creatives, coincidan en todo momentos con las suyas',
    },
    {
    id:2 , title:"Nuestra Mision", description:'Ganarnos la confianza de nuestras clientes garantizando enfciencia y calidad al mijor',
    },
  ]


  let positionScroll = window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    console.log(scroll)
});


if(positionScroll >600)
{
  console.log('testing')
}

  return (
    <div>
        <Header/>
        <div className='main'>
          <div className='aboutUs '>
            <div className="leftContent">
              <div className='imageShodow'>
              <img src={imageAboutUs} alt="Sobre Nosotros" />
              </div>
            </div>
            <div className="rightContent">
              <h2 className="aboutUsTitle" id='AboutUs'>
                Sobre Nosotros
              </h2>
              <p className="aboutUsText">
              RKH PROD es una destacada productora audiovisual que se especializa en videos promocionales, publicitarios, spots, videoclips, documentales y cortometrajes. También ofrecemos servicios de fotografía en moda, deportes, retratos y más. Además, somos expertos en la producción musical, abarcando géneros como pop, hip hop, y otros estilos.<br/>
              <br/>

              Trabajamos estrechamente con nuestros clientes para captar su visión y objetivos únicos en cada proyecto. Desde el concepto inicial hasta la entrega final, nuestro equipo altamente competente se esfuerza por lograr la máxima calidad y excelencia.<br/>
              <br/>

              En RKH PROD, te brindamos una experiencia de producción profesional y completa. Si buscas una productora audiovisual confiable y creativa para materializar tus ideas, ¡no dudes en contactarnos! Estamos emocionados de colaborar contigo y llevar tus proyectos al siguiente nivel.
              </p>
            </div>
          </div>
          <div className="servicesContainer">
                <div className="services">
                    {sercices.map((service)=>(
                      <div className="serviceContent" key={service.id}>
                         <img src={service.imageUrl} alt="" />
                          <p className='descriptionService'>{service.description}</p>
                      </div>
                     
                    ))}
                </div>
          </div>
        </div>
        <div className="moreInfos">
          {moreInfos.map((moreInfo)=>(
            <div className="moreInfo" key={moreInfo.id}>
            <h2 className='moreInfoTitle'>{moreInfo.title}</h2>
            <div className="moreInfoDescriptionContainer">
              <p className="moreInfoDescription">{moreInfo.description}</p>
            </div>
           
          </div>
          ))}
        </div>

            <div className="myWork servicesContainer">
              <div className="myWorkCards">
                <div className="videoGraphy">
                  <img src={videoGraphy} alt="videoGraphy" className="myWorkImage" />
                </div>
                <div className="videoGraphyTitle moreInfoTitle">
                  <h2 className="myWorkTitle">videografia</h2>
                  <Link to='http://' className='moreVideos' >
                    ver mas videos
                  </Link>
                </div>
              </div>
              <div className="myWorkCards">
                <div className="videoGraphyTitle moreInfoTitle">
                  <h2 className="myWorkTitle">videografia</h2>
                  <Link to='http://' className='moreVideos' >
                    ver mas videos
                  </Link>
                </div>
                <div className="videoGraphy">
                  <img src={videoGraphy} alt="videoGraphy" className="myWorkImage" />
                </div>
              </div>
            </div>
    </div>
  )
}
