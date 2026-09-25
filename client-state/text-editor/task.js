const ramka = document.getElementById('editor');
// Восстановление
const saved = localStorage.getItem('Text'); 
if (saved !== null) {
    ramka.value = saved;
}
// Сохраняем при вводе
ramka.addEventListener('input', () => {
    localStorage.setItem('Text', ramka.value);
});

 


