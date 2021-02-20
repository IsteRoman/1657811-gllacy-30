const sliders_block = document.querySelector('.sliders-block');
const sliders = document.querySelectorAll('.slider');
const slide_buttons = document.querySelectorAll('.slider-button');
const first_slide = document.querySelector('.first-slider');
const first = document.querySelector('.first');
const second_slide = document.querySelector('.second-slider');
const second = document.querySelector('.second');
const third_slide = document.querySelector('.third-slider');
const third = document.querySelector('.third');
const open_form = document.querySelector('.button-open-modal');
const modal_form = document.querySelector('.modal');
const close_form = document.querySelector('.close');

if (sliders_block) {
  const sliders_clear = function() {
    for (let i = 0; i<sliders.length; i++) {
      sliders[i].classList.add('visually-hidden');
    }
  }
  const button_clear = function() {
    for (let i = 0; i<slide_buttons.length; i++) {
      slide_buttons[i].classList.remove('slider-button-active');
    }
  }
  first.addEventListener('click', function() {
    sliders_clear();
    button_clear();
    first_slide.classList.remove('visually-hidden');
    first.classList.add('slider-button-active');
  });
  second.addEventListener('click', function() {
    sliders_clear();
    button_clear();
    second_slide.classList.remove('visually-hidden');
    second.classList.add('slider-button-active');
  });
  third.addEventListener('click', function() {
    sliders_clear();
    button_clear();
    third_slide.classList.remove('visually-hidden');
    third.classList.add('slider-button-active');
  });
}

if (modal_form) {
  open_form.addEventListener('click', function() {
    modal_form.classList.remove('visually-hidden');
  });

  close_form.addEventListener('click', function() {
    modal_form.classList.add('visually-hidden');
  });
}
