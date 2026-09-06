const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach (entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal_active');
        }
    });
});

items.forEach( item => {
    observer.observe(item);
})

