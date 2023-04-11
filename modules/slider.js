window.addEventListener('DOMContentLoaded', function() {

let sliderIndex = 1;

const wrapper = document.querySelectorAll('.slider__wrapper'),
    prev = document.querySelector('.slider__prev'),
    next = document.querySelector('.slider__next'),
    total = document.querySelector('#total'),
    curr = document.querySelector('#curr');

showSlides(sliderIndex);

if (wrapper.length < 10) {
    total.textContent = `0${wrapper.length}`;
} else {
    total.textContent = wrapper.length;
}

function showSlides(n){
    if (n > wrapper.length){
        sliderIndex = 1;
    }
    if (n < 1){
        sliderIndex = wrapper.length;
    }

    wrapper.forEach(item => {
        item.classList.add('hide');
    });


    function changeSlide(){
     wrapper[sliderIndex - 1].classList.remove('hide');

    }
    
changeSlide();

    if (wrapper.length < 10){
        curr.textContent = `0${sliderIndex}`;
    } else {
        curr.textContent = sliderIndex;
    }
}

function plusSlides (n) {
    showSlides(sliderIndex +=n);
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});

});