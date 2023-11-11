import './App.css';
import './styles/Mobile.css';
import { BiMenu, BiXCircle } from 'react-icons/bi';
import { openNav, closeNav } from './functionsMenu/Nav.js';
import { FaMapMarkerAlt } from "react-icons/fa";
import Slideshow from './components/Slideshow';
import { ContactUs } from './components/ContactUS';
import './styles/Pc.css';
import {EpicLogo, InstaLogo, WasapLogo} from './components/Icons.js';

function App() {
  return (
    <body>
      <header>
        <div className='nav'>
          <div className='logo'>
            <h1>Epic Auto Spa</h1>
          </div>
          <div className='links-pc'>
            <ul>
              <li><a href='#about-us' onClick={closeNav}>Sobre Nosotros</a></li>
              <li><a href='#service' onClick={closeNav}>Servicios</a></li>
              <li><a href='#works' onClick={closeNav}>Nuestros Trabajos</a></li>
              <li><a href='#location' onClick={closeNav}>Ubicación</a></li>
              <li><a href='#contact' onClick={closeNav}>Contactos</a></li>
              <span className='span'>.</span>
            </ul>
          </div>
          <div className='links-mobile' id='menu-mobile'>
            <a onClick={closeNav}><BiXCircle className='close-menu' /></a>
            <ul>
              <li><a href='#about-us' onClick={closeNav}>Sobre Nosotros</a></li>
              <li><a href='#service' onClick={closeNav}>Servicios</a></li>
              <li><a href='#works' onClick={closeNav}>Nuestros Trabajos</a></li>
              <li><a href='#location' onClick={closeNav}>Ubicación</a></li>
              <li><a href='#contact' onClick={closeNav}>Contactos</a></li>
            </ul>
          </div>
          <div className='icon-open-menu-container'>
            <a onClick={openNav}><BiMenu className='open-menu' /></a>
          </div>
        </div>
      </header>
      <section>
        <div className='about-us' id='about-us'>
          <p><strong>Sobre Nosotros</strong></p>
          <p>
            "En <strong>Epic Auto Spa</strong>, tenemos pasión por el cuidado de los vehículos. Estamos comprometidos a brindar servicios de alta calidad que mantendrán tu coche en su mejor estado.
          </p>
          <p>
          En <strong>Epic Auto Spa</strong>, sabemos que tu coche es más que un simple medio de transporte; es una inversión que merece el mejor cuidado. Te invitamos a vivir la experiencia de un lavado de autos de excelencia. ¡Ven y descubre la diferencia que nuestra de dedicación y pasión por nuestro trabajo puede hacer por tu vehículo!"
          </p>
        </div>
      </section>
      <section>
        <div className='service' id='service'>
          <p className='tittle-service'><strong>Servicios</strong></p>
          <p>
          Nos esforzamos en cada lavado artesanal, dedicando una atención meticulosa para garantizar la máxima calidad en nuestros servicios. Además, te invitamos a experimentar nuestro excepcional servicio al cliente y explorar la amplia gama de productos que tenemos para ofrecerte.
          </p>
          <div className='service-description'>
            <p><strong>Limpieza Automovil</strong></p>
            <ul>
              <li>- Limpieza completa de interior</li>
              <li>- Limpieza e hidratado de paneles</li>
              <li>- Limpieza de tapizados en general</li> 
              <li>- Alfombra</li>
              <li>- Encerado</li>
              <li>- Restauración de ópticas</li>
              <li>- Tratamientos de pintura:</li>
              <li>  *	Abrillantado</li>
              <li>  * Acrílico</li>
              <li>  *	Cerámico</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='works' id='works'>
          <p><strong>Nuestros Trabajos</strong></p>
          <div className='container-words-work'>
            <p>El profesionalismo que nos caracteriza queda reflejado en cada uno de los trabajos que realizamos. Somos detallistas y cuidamos el proceso porque sabemos que es importante para el cuidado de tu auto a largo plazo, aplicando las técnicas de trabajo recomendadas por los mejores expertos de la industria. </p>
          </div>
          <Slideshow />  
        </div>
      </section>
      <section>
        <div className='location' id='location'>
          <p><strong>Ubicación</strong></p>
          <div className='container-words-location'>
            <p> Nos ubicamos sobre una de las avenidas principales de la ciudad para tu comodidad y confort. ¡Te esperamos!</p>
          </div>
          <div className='google-maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.0281640838105!2d-64.96231429505427!3d-25.79023535593746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9418512881425b71%3A0x3a3068bedb5a8e08!2sEpic%20Auto%20Spa!5e0!3m2!1ses!2sar!4v1698154385582!5m2!1ses!2sar"></iframe>
          </div>
          <div className='direction'>
            <FaMapMarkerAlt className='location-icon'/>
            <p>Av. Sarmiento 1613, R° de la Frontera, Salta</p>
          </div>
        </div>
      </section>
      <section>
        <div className='contact' id='contact'>
          <p><strong>Contactos</strong></p>
          <div className='contact-container'>
            <div className='container-icons-mobile'>
              <a href='https://www.instagram.com/epic.auto.spa/' target='_blank'>
                <div className='insta-icon'>
                  <InstaLogo />
                </div>
              </a>
              <a href='https://api.whatsapp.com/message/6STWPTGSVFGEF1?autoload=1&app_absent=0' target='_blank'>
                <div className='wasap-icon'>
                  <WasapLogo />
                </div>
              </a>
            </div>
            <div className='container-icons-pc'>
              <div className='logo-contact'>
                <EpicLogo />
              </div>
              <div className='container-socialmedia'>
                <a href='https://www.instagram.com/epic.auto.spa/' target='_blank'>
                  <div className='insta-icon2'>
                    <InstaLogo />
                  </div>
                </a>
                <a href='https://api.whatsapp.com/message/6STWPTGSVFGEF1?autoload=1&app_absent=0' target='_blank'>
                  <div className='wasap-icon2'>
                    <WasapLogo />
                  </div>
                </a>
              </div>
            </div> 
            <div className='contact-form-container'>
              <ContactUs />
            </div> 
          </div>
          
        </div>
      </section>
      <footer>
        <div className='footer'>
          <div className='epic-auto-spa-logo'>
            <EpicLogo />
          </div>
          <p>Todos los derechos reservados@2023 - Salta, Argentina.</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
