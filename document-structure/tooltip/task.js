const tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach(el => {
    const text = el.getAttribute('title');
    el.removeAttribute('title');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = text;

    el.appendChild(tooltip);

    el.addEventListener('click', (e) => {
        e.preventDefault();
        tooltip.classList.toggle('tooltip_active');
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-tooltip")) {
        document.querySelectorAll(".tooltip.tooltip_active")
            .forEach(el => el.classList.remove("tooltip_active"));
    }
});