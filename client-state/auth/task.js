// ===== Получаем ссылки на элементы DOM =====
const signin  = document.getElementById('signin');   //блок формы
const welcome = document.getElementById('welcome');    // блок приветствия
const forms   = document.getElementById('signin__form');// сама форма
const text    = document.getElementById('user_id');    // span внутри #welcome

const savedId = localStorage.getItem('user_id');

// Если id есть — значит пользователь уже входил
if (savedId) {
    text.textContent = savedId;
    // Показываем приветствие
    welcome.classList.add('welcome_active');
    // Скрываем форму
    signin.classList.remove('signin_active');
}

forms.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(forms);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!result.success) {
            // Неверные данные
            alert('Неверный логин или пароль')
            forms.reset();
            return;
        }

        // 1. Запоминаем id на будущее
        localStorage.setItem('user_id', result.user_id);
        // 2. Показываем id прямо сейчас
        text.textContent = result.user_id;
        // 3. Показываем приветствие
        welcome.classList.add('welcome_active');
        // 4. Скрываем форму
        signin.classList.remove('signin_active');

        forms.reset();

    } catch (error) {
        console.error(error);
        alert('Что-то пошло не так, попробуйте позже');
    }
});