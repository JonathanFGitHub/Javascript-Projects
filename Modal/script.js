'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //Different selctor here. 

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) { //e is the parameter we are passing in. It could be any value..
  // console.log(e.key); //Just shows the value of the key entered
  // console.log(e); //Doing this will show us the keyboard event that will display the property "key" and it's value. 


  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
