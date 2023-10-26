import '../App.js';

const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const slider = document.querySelector('.images-container');
  const sliderSection = document.querySelectorAll('.slider-section');

let statusX = 0;
let widthImg = 100 / 8;

export function moveToRight(){
    statusX = statusX + widthImg;
    console.log(statusX)
    slider.style.transform = `translate(-${statusX}%)`
}

export function moveToLeft(){

}