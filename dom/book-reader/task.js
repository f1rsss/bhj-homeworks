const items = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

items.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const size = this.dataset.size;
        items.forEach(el => el.classList.remove('font-size_active'));
        this.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');

        }

        })
    });



