const elements = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

elements.forEach((element, index) => {
    element.addEventListener('click', function(e) {
        // Удаляем класс у всех
        elements.forEach(el => el.classList.remove('tab_active'));
        // Добавляем класс текущему
        this.classList.add('tab_active');

        contents.forEach((content, ind) => {
            content.classList.toggle('tab__content_active', ind === index);
        });
    });
});
