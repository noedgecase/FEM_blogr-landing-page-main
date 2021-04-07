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
    document.getElementById('desktop--illustration').src =
      './images/illustration-editor-mobile.svg';
    document.getElementById('laptop').src =
      './images/illustration-laptop-mobile.svg';
  } else {
    document.getElementById('desktop--illustration').src =
      './images/illustration-editor-desktop.svg';
    document.getElementById('laptop').src =
      './images/illustration-laptop-desktop.svg';
  }
};

// document.getElementById('desktop--illustration').src;
