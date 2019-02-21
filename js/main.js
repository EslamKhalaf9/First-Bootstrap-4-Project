// Adjust Slider Height
let firstElement = document.querySelectorAll('.carousel-item')[0],
    secondElement = document.querySelectorAll('.carousel-item')[1],
    thirdElement = document.querySelectorAll('.carousel-item')[2];

let windowHeight = window.innerHeight,
    upperNavHeight = document.querySelector('.upper-bar').clientHeight,
    mainNav = document.querySelector('.navbar').clientHeight,
    actualheight = windowHeight - (upperNavHeight + mainNav);

document.querySelector('.slider').style.height = actualheight + 'px';
firstElement.style.height = actualheight + 'px';
secondElement.style.height = actualheight + 'px';
thirdElement.style.height = actualheight + 'px';

window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
  upperNavHeight = document.querySelector('.upper-bar').clientHeight;
  mainNav = document.querySelector('.navbar').clientHeight;
  actualheight = windowHeight - (upperNavHeight + mainNav);
  document.querySelector('.slider').style.height = actualheight + 'px';
  firstElement.style.height = actualheight + 'px';
  secondElement.style.height = actualheight + 'px';
  thirdElement.style.height = actualheight + 'px';
});



