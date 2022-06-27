// Modal for project one

const modalOne = document.querySelector('#modal-one');
const openModalOne = document.querySelector('#project-1')
const closeModalOne = document.querySelector('#close-modal-1')

openModalOne.addEventListener('click', () => {
    modalOne.showModal();
});

closeModalOne.addEventListener('click', () => {
    modalOne.close();
});


// Modal for project two

const modalTwo = document.querySelector('#modal-two');
const openModalTwo = document.querySelector('#project-2')
const closeModalTwo = document.querySelector('#close-modal-2')

openModalTwo.addEventListener('click', () => {
    modalTwo.showModal();
});

closeModalTwo.addEventListener('click', () => {
    modalTwo.close();
});


// Modal for project three

const modalThree = document.querySelector('#modal-three');
const openModalThree = document.querySelector('#project-3')
const closeModalThree = document.querySelector('#close-modal-3')

openModalThree.addEventListener('click', () => {
    modalThree.showModal();
});

closeModalThree.addEventListener('click', () => {
    modalThree.close();
});