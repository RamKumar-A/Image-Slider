'use strict';

const images = [
  'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5DR3G8yuRSsPIb7iI9BnaEKVFaG03M4Z-Ep09v1BP3kKM5fhloO2_RjT2onfasLWAYQ&usqp=CAU',
  'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
];

const imgDiv = document.querySelector('.img__div');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotContainer = document.querySelector('.dots__container');

let curSlide = 0;
let maxSlide = images.length - 1;

function createDots() {
  images.forEach((_, i) => {
    const html = `<div class="dots" data-dot="${i}"></div>`;
    dotContainer.insertAdjacentHTML('beforeend', html);
  });
}

function updateSlide() {
  const html = `<img src='${images[curSlide]}' alt='ram'>`;
  imgDiv.innerHTML = html;
}

function activeDot(slide) {
  document
    .querySelectorAll('.dots')
    .forEach((dot) => dot.classList.remove('active-dot'));
  document
    .querySelector(`.dots[data-dot="${slide}"]`)
    .classList.add('active-dot');
}

updateSlide();
createDots();
activeDot(0);

nextBtn.addEventListener('click', function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  updateSlide();
  activeDot(curSlide);
});

prevBtn.addEventListener('click', function () {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;
  updateSlide();
  activeDot(curSlide);
});
