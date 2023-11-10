const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnOpenSecond = document.querySelector('.modal-btn-open-second');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpenSecond.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);