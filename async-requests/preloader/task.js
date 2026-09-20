// Контейнер для валют
const vivodnaEkran = document.getElementById('items');

// Лоадер (гифка загрузки)
const zagruzka = document.querySelector('.loader');

async function poluchenieDannix() {
    try {
        // GET-запрос к API
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');

        // Если статус не 200–299 — кидаем ошибку
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        // Парсим ответ в объект
        const data = await response.json();

        // Достаём валюты
        const valutes = data.Valute;

        // Формируем HTML
        const html = Object.values(valutes).map(v => `
            <div class="item">
                <div class="item__code">${v.CharCode}</div>
                <div class="item__value">${v.Value.toFixed(2)}</div>
                <div class="item__currency">руб.</div>
            </div>
        `).join("");

        // Вставляем готовый HTML
        vivodnaEkran.innerHTML = html;

    } catch (error) {
        // Если что-то пошло не так — показываем сообщение
        vivodnaEkran.innerHTML = `Не удалось загрузить курсы: ${error.message}`;

    } finally {
        // Скрываем лоадер в любом случае: и при успехе, и при ошибке
        zagruzka.classList.remove('loader_active');
    }
}
// Для наглядности, иначе очень быстро загружается, и кажется что момент с загрузкой отсутствует
setTimeout(poluchenieDannix, 2000);