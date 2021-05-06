'use strict';

window.addEventListener('load', () => {
  firstQueries();
});
window.addEventListener('resize', () => {
  firstQueries();
});

const firstQueries = () => {
  const media = window.matchMedia('(max-width: 780px)');
  if (media.matches) {
    document.getElementById('js--burger').classList.remove('hidden');
    document.getElementById('desktop--illustration').src =
      './images/illustration-editor-mobile.svg';
    document.getElementById('laptop').src =
      './images/illustration-laptop-mobile.svg';
  } else {
    document.getElementById('burger-icon').src = './images/icon-hamburger.svg';
    document.querySelector('.mobile--hamburger--nav').classList.add('fade-out');
    document.getElementById('js--burger').classList.add('hidden');
    document.getElementById('desktop--illustration').src =
      './images/illustration-editor-desktop.svg';
    document.getElementById('laptop').src =
      './images/illustration-laptop-desktop.svg';
  }
};

document.getElementById('js--burger').addEventListener('click', () => {
  if (
    document
      .getElementById('burger-icon')
      .src.match('./images/icon-hamburger.svg')
  ) {
    console.log(`opened`);
    document.getElementById('burger-icon').src = './images/icon-close.svg';
    document
      .querySelector('.mobile--hamburger--nav')
      .classList.toggle('fade-out');
  } else {
    console.log(`closed`);
    document.getElementById('burger-icon').src = './images/icon-hamburger.svg';
    document
      .querySelector('.mobile--hamburger--nav')
      .classList.toggle('fade-out');
  }
});

// mobile navigation ////////////////////////////

const companyBtn = document.querySelector('.company--nav--btn');
const connectBtn = document.querySelector('.connect--nav--btn');
const productBtn = document.querySelector('.product--nav--btn');

console.log(document.querySelector('.mobile--company').childNodes);

companyBtn.addEventListener('click', () => {
  document
    .querySelector('.mobile--company')
    .childNodes[3].classList.toggle('hidden');
  document
    .querySelector('.mobile--connect')
    .childNodes[3].classList.add('hidden');
  document
    .querySelector('.mobile--product')
    .childNodes[3].classList.add('hidden');
});

connectBtn.addEventListener('click', () => {
  document
    .querySelector('.mobile--connect')
    .childNodes[3].classList.toggle('hidden');
  document
    .querySelector('.mobile--product')
    .childNodes[3].classList.add('hidden');
  document
    .querySelector('.mobile--company')
    .childNodes[3].classList.add('hidden');
});

productBtn.addEventListener('click', () => {
  document
    .querySelector('.mobile--product')
    .childNodes[3].classList.toggle('hidden');
  document
    .querySelector('.mobile--company')
    .childNodes[3].classList.add('hidden');
  document
    .querySelector('.mobile--connect')
    .childNodes[3].classList.add('hidden');
});
