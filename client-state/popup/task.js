const krest = document.querySelector('.modal__close');
const okno = document.querySelector('.modal');

// Восстановление: если модалка была закрыта — закрыть сразу
if (localStorage.getItem('Zakrit') === '1') {
    okno.classList.remove('modal_active');
}

// Клик по крестику
krest.addEventListener('click', () => {
    okno.classList.remove('modal_active');
    localStorage.setItem('Zakrit', '1');
});