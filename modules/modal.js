// Modal

window.addEventListener('DOMContentLoaded', function() {

    const modal = document.querySelector('.modal'),
    openModal = document.querySelector('.openModal'),
    closeModal = document.querySelector('.modal-close');
    
    function openModalWindow(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        clearInterval(openModalWindow);
    }

    closeModal.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }) 

    const modalTimer = setTimeout(openModalWindow, 3000);

    // modal#2

    const modal2 = document.querySelector('.modal2'),
        close = document.querySelector('.modal__close'),
        open = document.querySelector('.openModal');

    function openModal2(){
        modal2.classList.toggle('hide');
    }

    open.addEventListener('click', openModal2);

    close.addEventListener('click', () => {
        modal2.classList.add('hide');
        modal2.classList.remove('show');
    })

});