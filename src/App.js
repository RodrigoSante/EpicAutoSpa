import './App.css';

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
              <li>Sobre Nosotros</li>
              <li>Servicios</li>
              <li>Ubicación</li>
              <li>Contactos</li>
            </ul>
          </div>
          <div className='links-mobile'>
            <ul>
                <li>Sobre Nosotros</li>
                <li>Servicios</li>
                <li>Ubicación</li>
                <li>Contactos</li>
              </ul>
          </div>
        </div>
      </header>
      <section>
        <div className='about-us'>
          <p>Sobre Nosotros</p>
          <p>
            "En Epic Auto Spa, tenemos pasión por el cuidado de los vehículos. Estamos comprometidos a brindar servicios de alta calidad que mantendrán tu coche en su mejor estado.
          </p>
          <p>
          Nuestra filosofía se basa en la combinación de las mejores tecnologías del mercado, instalaciones de primera categoría y un equipo altamente capacitado. En cada visita, disfrutarás del profesionalismo de nuestro personal, que se dedica a satisfacer todas tus necesidades.
          </p>
          <p>
          En Epic Auto Spa, sabemos que tu coche es más que un simple medio de transporte; es una inversión que merece el mejor cuidado. Te invitamos a vivir la experiencia de un lavado de autos de excelencia. ¡Ven y descubre la diferencia que nuestra de dedicación y pasión por nuestro trabajo puede hacer por tu vehículo!"
          </p>
        </div>
      </section>
      <section>
        <div className='service'>
          <p>Servicios</p>
          <p>
          Nos esforzamos en cada lavado artesanal, dedicando una atención meticulosa para garantizar la máxima calidad en nuestros servicios. Además, te invitamos a experimentar nuestro excepcional servicio al cliente y explorar la amplia gama de productos que tenemos para ofrecerte.
          </p>
          <div className='service-description'>
            <p>Limpieza Automovil</p>
            <ul>
              <li>Interior</li>
              <li>Limpieza de Tapizados en General (Techo, Piso, Butacas, Paneles, Parantes, Plásticos, Renovación de Plasticos)</li>
              <li>Alfombra</li>
              <li>Pulido de Carrocería</li>
              <li>Encerado</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='location'>
          <p>Ubicación</p>
        </div>
      </section>
      <section>
        <div className='contact'>
          <p>Contactos</p>
        </div>
      </section>
    </body>
  );
}

export default App;
