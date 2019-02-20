// Adjust Slider Height

let windowHeight = window.innerHeight,
    upperNavHeight = document.querySelector('.upper-bar').clientHeight,
    mainNav = document.querySelector('.navbar').clientHeight,
    actualheight = windowHeight - (upperNavHeight + mainNav);

document.querySelector('.slider').style.height = actualheight + 'px';
document.querySelectorAll('.carousel-item')[0].style.height = actualheight + 'px';
document.querySelectorAll('.carousel-item')[1].style.height = actualheight + 'px';
document.querySelectorAll('.carousel-item')[2].style.height = actualheight + 'px';

window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
  upperNavHeight = document.querySelector('.upper-bar').clientHeight;
  mainNav = document.querySelector('.navbar').clientHeight;
  actualheight = windowHeight - (upperNavHeight + mainNav);
  document.querySelector('.slider').style.height = actualheight + 'px';
  document.querySelectorAll('.carousel-item')[0].style.height = actualheight + 'px';
  document.querySelectorAll('.carousel-item')[1].style.height = actualheight + 'px';
  document.querySelectorAll('.carousel-item')[2].style.height = actualheight + 'px';
});



