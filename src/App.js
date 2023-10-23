import './App.css';
import './styles/Mobile.css';
import { BiMenu, BiXCircle } from 'react-icons/bi';
import { openNav, closeNav } from './functionsMenu/Nav.js';

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
              <li><a href='#location' onClick={closeNav}>Ubicación</a></li>
              <li><a href='#contact' onClick={closeNav}>Contactos</a></li>
            </ul>
          </div>
          <div className='links-mobile' id='menu-mobile'>
            <a onClick={closeNav}><BiXCircle className='close-menu' /></a>
            <ul>
              <li><a href='#about-us' onClick={closeNav}>Sobre Nosotros</a></li>
              <li><a href='#service' onClick={closeNav}>Servicios</a></li>
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
              <li>- Interior</li>
              <li>- Limpieza de Tapizados en General (Techo, Piso, Butacas, Paneles, Parantes, Plásticos, Renovación de Plasticos)</li>
              <li>- Alfombra</li>
              <li>- Pulido de Carrocería</li>
              <li>- Encerado</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='location' id='location'>
          <p><strong>Ubicación</strong></p>
          <div className='google-maps'>
            asd
          </div>
          <p>Av. Sarmiento 1613, R° de la Frontera, Salta</p>
        </div>
      </section>
      <section>
        <div className='contact' id='contact'>
          <p>Contactos</p>
        </div>
      </section>
    </body>
  );
}

export default App;
