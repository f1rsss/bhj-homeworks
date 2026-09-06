const items = document.querySelectorAll('.rotator__case');
let currentIndex = 0;


setInterval ( () => {
    items.forEach(item  => {
        item.classList.remove('rotator__case_active');
        });
        items[currentIndex].classList.add('rotator__case_active');
        currentIndex = (currentIndex + 1) % items.length;
}, 1000);