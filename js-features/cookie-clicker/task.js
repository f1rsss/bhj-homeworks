const cookie = document.getElementById("cookie");
const counterSpan = document.getElementById("clicker__counter");

let clickCount = 0;
let isBig = true;

cookie.addEventListener('click', function () {
    clickCount++;
    counterSpan.textContent = clickCount;

    if (isBig) {
        cookie.style.width = "150px";
        cookie.style.height = "150px";
    } else {
        cookie.style.width = "200px";
        cookie.style.height = "200px";
    }

    isBig = !isBig
})

