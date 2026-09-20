const vopros = document.getElementById('poll__title');
const otvet = document.getElementById('poll__answers');

async function PolychenieDannix() {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        if (!response.ok) throw new Error(`HTTP: ${response.status}`);
        const data = await response.json();

        vopros.textContent = data.data.title;

        data.data.answers.forEach(answer => {
            const newElem = document.createElement('button');
            newElem.className = 'poll__answer';
            newElem.textContent = answer;
            otvet.append(newElem);
            newElem.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                location.reload();

            });
        });

    } catch (err) {
        console.error(err);
        alert("Произошла ошибка, выбрать невозможно ((((");
    }
}

PolychenieDannix();