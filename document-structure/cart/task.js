const plusButtons  = document.querySelectorAll('.product__quantity-control_inc');
const minusButtons = document.querySelectorAll('.product__quantity-control_dec');
const addButtons   = document.querySelectorAll('.product__add');
const cart         = document.querySelector('.cart__products');

// --- плюс ---
plusButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const valueEl = product.querySelector('.product__quantity-value');
        let value = parseInt(valueEl.textContent, 10);
        valueEl.textContent = value + 1;
    });
});

// --- минус ---
minusButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const valueEl = product.querySelector('.product__quantity-value');
        let value = parseInt(valueEl.textContent, 10);
        if (value > 1) {
            valueEl.textContent = value - 1;
        }
    });
});

// --- добавление в корзину ---
addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product  = e.target.closest('.product');
        const id       = product.dataset.id;
        const img      = product.querySelector('.product__image').src;
        const quantity = parseInt(
            product.querySelector('.product__quantity-value').textContent,
            10
        );

        // ищем такой же товар в корзине
        const existingItem = cart.querySelector(`.cart__product[data-id="${id}"]`);

        if (existingItem) {
            // увеличиваем количество
            const countEl = existingItem.querySelector('.cart__product-count');
            countEl.textContent = parseInt(countEl.textContent, 10) + quantity;
        } else {
            // создаём новую карточку
            const item = document.createElement('div');
            item.classList.add('cart__product');
            item.dataset.id = id;
            item.innerHTML = `
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${quantity}</div>
            `;
            cart.appendChild(item);
        }
    });
});