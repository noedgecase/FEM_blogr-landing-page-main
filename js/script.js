'use strict';

window.addEventListener('resize', () => {
  firstQueries();
});

const firstQueries = () => {
  const media = window.matchMedia('(max-width: 780px)');
  if (media.matches) {
    document.getElementById('desktop--illustration').src =
      './images/illustration-editor-mobile.svg';
  } else {
    document.getElementById('desktop--illustration').src =
      './images/illustration-editor-desktop.svg';
  }
};

// document.getElementById('desktop--illustration').src;
