const page_background = document.querySelector('.page-body')
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
const overlay_block = document.querySelector('.overlay');
const form = modal_form.querySelector('.modal-form');
const login = modal_form.querySelector('[name=modal-user-name]');
const email = modal_form.querySelector('[name=modal-user-email]');
const close_form = document.querySelector('.close');

if (sliders_block) {
  const backgroundClear = function() {
    page_background.classList.remove('background-color-first');
    page_background.classList.remove('background-color-second');
    page_background.classList.remove('background-color-third');
  }

  const slidersClear = function() {
    for (let i = 0; i<sliders.length; i++) {
      sliders[i].classList.add('element-hidden');
    }
  }

  const buttonClear = function() {
    for (let i = 0; i<slide_buttons.length; i++) {
      slide_buttons[i].classList.remove('slider-button-active');
    }
  }

  first.addEventListener('click', function(evt) {
    evt.preventDefault();
    backgroundClear();
    slidersClear();
    buttonClear();
    first_slide.classList.remove('element-hidden');
    first.classList.add('slider-button-active');
    page_background.classList.add('background-color-first');
  });

  second.addEventListener('click', function(evt) {
    evt.preventDefault();
    backgroundClear();
    slidersClear();
    buttonClear();
    second_slide.classList.remove('element-hidden');
    second.classList.add('slider-button-active');
    page_background.classList.add('background-color-second');
  });

  third.addEventListener('click', function(evt) {
    evt.preventDefault();
    backgroundClear();
    slidersClear();
    buttonClear();
    third_slide.classList.remove('element-hidden');
    third.classList.add('slider-button-active');
    page_background.classList.add('background-color-third');
  });
}

if (modal_form) {
  const closeModal = function() {
    modal_form.classList.remove('modal-appearance');
    overlay_block.classList.remove('overlay-appearance');
    modal_form.classList.remove('modal-error');
    modal_form.classList.add('element-hidden');
    overlay_block.classList.add('element-hidden');
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
    modal_form.classList.remove('modal-disappeared');
    modal_form.classList.remove('element-hidden');
    modal_form.classList.add('modal-appearance');
    overlay_block.classList.remove('overlay-disappeared');
    overlay_block.classList.remove('element-hidden');
    overlay_block.classList.add('overlay-appearance');
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close_form.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal_form.classList.add('modal-disappeared');
    overlay_block.classList.add('overlay-disappeared');
    setTimeout (closeModal, 1000);
  });

  form.addEventListener('submit', function(evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      modal_form.classList.remove('modal-error');
      modal_form.offsetWidth = modal_form.offsetWidth;
      modal_form.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value);
      }
    }
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal_form.classList.add('modal-disappeared');
      overlay_block.classList.add('overlay-disappeared');
      setTimeout (closeModal, 1000);
    }
  });

  overlay_block.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal_form.classList.add('modal-disappeared');
    overlay_block.classList.add('overlay-disappeared');
    setTimeout (closeModal, 1000);
  });
}
