import '../App.js';
import '../styles/Mobile.css';

const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const slider = document.querySelector('.images-container');
  const sliderSection = document.querySelectorAll('.slider-section');

setInterval(() => {
  moveToRight()
}, 3000);

let statusX = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;


export function moveToRight(){
    if(counter >= sliderSection.length - 1){
      counter = 0;
      statusX = 0;
      slider.style.transform = `translate(-${statusX}%)`
      slider.style.transition = 'none';
      return;
    }
    counter ++;
    console.log('counter');
    statusX = statusX + widthImg;
    slider.style.transform = `translate(-${statusX}%)`;
    slider.style.transition = 'all ease 0.6s';
  
}

export function moveToLeft(){
  counter --;
  if(counter < 0){
    counter = sliderSection.length - 1;
    statusX = widthImg * (sliderSection.length-1);
    slider.style.transform = `translate(-${statusX}%)`;
    slider.style.transition = 'none';
    return;
  }
  statusX = statusX - widthImg;
  slider.style.transform = `translate(-${statusX}%)`;
  slider.style.transition = 'all ease 0.6s';
  
}