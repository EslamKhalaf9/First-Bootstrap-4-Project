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

// Work Section 
// Shuffle

const ul = document.querySelector('#work ul'),
      img = document.querySelectorAll('#work .img'),
      categories = ['Website', 'logo', 'graphic', 'marketing', 'videos'];


ul.addEventListener('click', e => {
  const element = e.target;
  if(element.hasAttribute('data')){
    /*First Of All hundle active class*/
    if(!element.classList.contains('active')){
      const lis = document.querySelectorAll('#work ul li');
      lis.forEach(li => {
        if(li.classList.contains('active')){
          li.classList.remove('active');
        }
      })
      element.classList.add('active');
      // shuffle
      shuffle(element,categories);
    }
  }
});
/************************************************************************* */
function shuffle(element,array) {
  array.forEach(cat => {
    if(element.getAttribute('data') === 'all'){
      img.forEach(im => {
        im.style.opacity = '1';
      })
    } else if (element.getAttribute('data') === cat){
      img.forEach(im => {
        im.style.opacity = '1';
        if(!im.classList.contains(cat)){
          im.style.opacity = '0.09';
        }
      })
    }
  });
}

