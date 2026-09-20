const form = document.getElementById('form');
const progress = document.getElementById('progress');
const btn = document.querySelector('input__wrapper-button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });

    xhr.send(new FormData(form));
    // сделал чтобы откатывалось назад и было видно что загружает
    setTimeout(() => {
    progress.value = 0;
}, 2000);
});
