const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim() === "") return;

        const taskHTML = `
            <div class="task">
                <div class="task__title">${input.value}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        taskList.insertAdjacentHTML('beforeend', taskHTML);
        input.value = "";
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.preventDefault(); 
        e.target.closest('.task').remove();
    }
})
