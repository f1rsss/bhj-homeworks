const deadSpan = document.getElementById("dead");
const lostSpan = document.getElementById("lost");

let dead = 0;
let lost = 0;

let playing = true;
let activeHole = 1;

function getHole(index) {
    return document.getElementById("hole" + index);
}

function deactivateHole(index) {
    const hole = getHole(index);
    hole.className = "hole";
}

function activateHole(index) {
    const hole = getHole(index);
    hole.className = 'hole hole_has-mole';
}

function updateStats() {
    deadSpan.textContent = dead;
    lostSpan.textContent = lost;
}

function checkGameOver () {
    if (dead > 10) {
        playing = false;
        alert("Ураааааа вы победили!!!!");
        return true;
    }
    if (lost >= 5) {
        playing = false;
        alert("Вы проиграли (((((")
        return true;
    }
    return false;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        if (!playing) return;
        if (this.classList.contains('hole_has-mole')) {
            dead++;
            deactivateHole(i);
            setTimeout(function() {
                if (playing) {
                    deactivateHole(activeHole);
                    const newHole = Math.floor(1 + Math.random() * 9);
                    activeHole = newHole;
                    
                    // Сажаем крота в новую норку
                    activateHole(activeHole);
                }
            }, 100);
        } else {
            lost++;
        }
        updateStats();
        checkGameOver();
    });
};

function next() {
    // Запускаем таймер на 800 миллисекунд (0.8 секунды)
    // setTimeout - выполняет код через указанное время
    setTimeout(function() {
        // Если игра остановлена - выходим из функции
        // return - прекращает выполнение
        if (!playing) return;
        
        // Убираем крота из старой норки
        deactivateHole(activeHole);
        
        // Выбираем новую случайную норку от 1 до 9
        // Math.random() - случайное число от 0 до 1
        // * 9 - от 0 до 9
        // + 1 - от 1 до 10
        // Math.floor - округляем вниз, получаем 1-9
        const newHole = Math.floor(1 + Math.random() * 9);
        activeHole = newHole; // Запоминаем новую норку
        
        // Сажаем крота в новую норку
        activateHole(activeHole);
        
        // Запускаем следующий цикл (рекурсия - функция вызывает саму себя)
        // Это создаёт бесконечный цикл с задержкой 800 мс
        next();
        
    }, 800); // Задержка 800 миллисекунд
}


// ===== 8. ЗАПУСКАЕМ ИГРУ =====

// Обновляем счётчики на экране (показываем начальные значения: 0 и 0)
updateStats();

// Запускаем основной цикл появления кротов
// Крот начнёт появляться в случайных норках каждые 800 мс
next();