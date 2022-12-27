let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dot= document.getElementsByClassName("dots");
  if (n > slides.length){
    slideIndex = 1
    }    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
}

const allMeals = document.querySelector('.meals');
const previewModalOverlay = document.getElementById('preview-modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');

allMeals.addEventListener('click', showMealImg);

modalCloseBtn.addEventListener('click', () => {
    previewModalOverlay.style.display = "none";
});

function showMealImg(e){
    let mealDiv;
    if(e.target.classList.contains('fas')){
        mealDiv = e.target.parentElement.parentElement;
    } else {
        mealDiv = e.target;
    }
    previewModalOverlay.querySelector('img').src = mealDiv.querySelector('img').src;
    previewModalOverlay.style.display = "block";
}
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', slideToggle)
});

function slideToggle(e){
    e.preventDefault();
    let slideWrapper = this.firstElementChild;

    if(e.target.classList.contains('btn-right') || e.target.classList.contains('fa-long-arrow-alt-right')){
        slideWrapper.classList.remove('slideLeft');
        slideWrapper.classList.add('slideRight');
    }

    if(e.target.classList.contains('btn-left') || e.target.classList.contains('fa-long-arrow-alt-left')){
        slideWrapper.classList.remove('slideRight');
        slideWrapper.classList.add('slideLeft');
    }
}