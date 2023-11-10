import React, { useRef, useEffect } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Slideshow = () => {

  const slideshow = useRef(null);
  const intervalSlideshow = useRef(null);

  const nextImage = () => {
    if(slideshow.current.children.length > 0){
      const firstImage = slideshow.current.children[0];
      const widthSlide = slideshow.current.children[0].offsetWidth;
            
      slideshow.current.style.transition = `500ms ease-out all`;
      slideshow.current.style.transform = `translateX(-${widthSlide}px)`;
            

      const transition = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstImage);

        slideshow.current.removeEventListener('transitionend', transition);
      } 

      slideshow.current.addEventListener('transitionend', transition);

    }
  }

  const beforeImage = () => {
    if(slideshow.current.children.length > 0){
      const index = slideshow.current.children.length - 1;
      const lastImage = slideshow.current.children[index];
      slideshow.current.insertBefore(lastImage, slideshow.current.firstChild);

      slideshow.current.style.transition = `none`;

      const widthSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

      setTimeout( () => {
        slideshow.current.style.transition = `500ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  }

  /*useEffect(() => {
    intervalSlideshow.current = setInterval(() => {
      nextImage();
    }, 5000);

    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervalSlideshow.current);
    });

    slideshow.current.addEventListener('mouseleave', () => {
      intervalSlideshow.current = setInterval(() => {
        nextImage();
      }, 5000);
    } )

  }, []);*/

  return(
        <div className='carousel-container'>
            <div className='images-container' ref={slideshow}>
                <section className='slider-section'>
                  <img
                  src={require('../images/toyota_corolla.jpg')}
                  alt='Toyota Corolla' />
                </section>
                <section className='slider-section'>
                  <img
                  src={require('../images/toyota_hilux.jpg')}
                  alt='Toyota Hilux' />
                </section>
                <section className='slider-section'>
                  <img 
                  src={require('../images/citroen_exterior.jpg')}
                  alt='Citroen'/>
                </section>
                <section className='slider-section'>
                  <img 
                  src={require('../images/audi_exterior.jpg')}
                  alt='Citroen'/>
                </section>
                <section className='slider-section'>
                  <img 
                  src={require('../images/chevrolet_exterior.jpg')}
                  alt='Citroen'/>
                </section>
                <section className='slider-section'>
                  <img 
                  src={require('../images/opticas_comparacion.jpg')}
                  alt='Citroen'/>
                </section>
                <section className='slider-section'>
                  <img 
                  src={require('../images/audi_interior.jpg')}
                  alt='Citroen'/>
                </section>
                <section className='slider-section'>
                  <img 
                  src={require('../images/audi_interior2.jpg')}
                  alt='Citroen'/>
                </section>
              </div>
              <div className='btn-left' onClick={beforeImage}>
                <IoIosArrowDropleftCircle className='arrow-left'/>
              </div>
              <div className='btn-right' onClick={nextImage}>
                <IoIosArrowDroprightCircle className='arrow-right'/>
              </div>
        </div>
    );
}

export default Slideshow;