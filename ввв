const sliders_block = document.querySelector('.sliders-block');
const sliders = document.querySelectorAll('.slider');
const slide_buttons = document.querySelectorAll('.slide-btn');
const first_slide = document.querySelector('.first-slide');
const first = document.querySelector('.first');
const second_slide = document.querySelector('.second-slide');
const second = document.querySelector('.second');
const third_slide = document.querySelector('.third-slide');
const third = document.querySelector('.third');
const open_form = document.querySelector('.button-open-form');
const modal_form = document.querySelector('.modal');
const form = modal_form.querySelector('.modal-form');
const login = modal_form.querySelector('[name=user_name]');
const email = modal_form.querySelector('[name=user_email]');
const review = modal_form.querySelector('[name=review]');
const close_form = document.querySelector('.close');

if (sliders_block) {
  const slidersClear = function() {
    for (let i = 0; i<sliders.length; i++) {
      sliders[i].classList.add('element-hidden');
    }
  }
  const buttonClear = function() {
    for (let i = 0; i<slide_buttons.length; i++) {
      slide_buttons[i].classList.remove('slide-btn-active');
    }
  }
  first.addEventListener('click', function(evt) {
    evt.preventDefault();
    slidersClear();
    buttonClear();
    first_slide.classList.remove('element-hidden');
    first.classList.add('slide-btn-active');
  });
  second.addEventListener('click', function(evt) {
    evt.preventDefault();
    slidersClear();
    buttonClear();
    second_slide.classList.remove('element-hidden');
    second.classList.add('slide-btn-active');
  });
  third.addEventListener('click', function(evt) {
    evt.preventDefault();
    slidersClear();
    buttonClear();
    third_slide.classList.remove('element-hidden');
    third.classList.add('slide-btn-active');
  });
}

if (modal_form) {

  const closeModal = function() {
    modal_form.classList.remove('animation-appearance');
    modal_form.classList.remove('animation-error');
    modal_form.classList.add('element-hidden');
  }

  let isStorageSupport = true;
  const storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  open_form.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal_form.classList.remove('animation-disappeared');
    modal_form.classList.add('animation-appearance');
    modal_form.classList.remove('element-hidden');
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close_form.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal_form.classList.add('animation-disappeared');
    setTimeout (closeModal, 1000);
  });

  form.addEventListener('submit', function(evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      modal_form.classList.remove('animation-error');
      modal_form.offsetWidth = modal_form.offsetWidth;
      modal_form.classList.add('animation-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value);
      }
    }
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_form.classList.add('animation-disappeared');
      setTimeout (closeModal, 1000);
    }
  });
}
