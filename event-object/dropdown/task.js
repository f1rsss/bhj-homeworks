const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', function() {
  dropdownList.classList.toggle('dropdown__list_active');
});

items.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault(); // отменяем переход по ссылке
    const link = this.querySelector('.dropdown__link');
    dropdownValue.textContent = link.textContent; // меняем текст
    dropdownList.classList.remove('dropdown__list_active'); // закрываем список
  });
});