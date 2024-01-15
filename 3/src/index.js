document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    let index = 0;

    function showSlide() {
        if (index === slides.length) {
            index = 0;
        }
        const translateValue = -index * 100 + "%";
        slider.style.transform = "translateX(" + translateValue + ")";
        index++;
    }

    // Show the last slide when the page loads
    showSlide();

    // Automatically transition to the last slide
    // setInterval(showSlide, 1000); // Adjust the interval as needed
});

// // Получаем элементы DOM
// const moneyRange = document.getElementById('money-range');
// const moneyNumber = document.getElementById('money-number');
// const moneySubmit = document.querySelector('.money__submit');
//
// const bubbles = document.querySelectorAll('.bubble');
// // moneyNumber.focus()
//
// const min =  1000;
// const max =  100000;
// const step = 1000;
// const firstValue = 5000;
//
// moneyRange.min = min;
// moneyRange.max = max;
// moneyRange.step = step;
// moneyNumber.min = min;
// moneyNumber.max = max;
// moneyNumber.step = step;
//
// const minMax = document.querySelectorAll('.money__up-values span')
//
// minMax[0].textContent = min.toString();
// minMax[1].textContent = max.toString();
// console.log(minMax)
//
// // Устанавливаем начальное значение поля ввода и ползунка
// moneyNumber.value = firstValue;
// moneyRange.value = firstValue;
//
// // Обработчик изменения ползунка
// moneyRange.addEventListener('input', () => {
//     // Устанавливаем значение поля ввода равным значению ползунка
//     moneyNumber.value = moneyRange.value;
// });
//
// // Обработчик изменения значения поля ввода
// moneyNumber.addEventListener('input', () => {
//     // Устанавливаем значение ползунка равным значению поля ввода
//     moneyRange.value = moneyNumber.value;
// });
//
// // Обработчик нажатия кнопки submit (ваша логика для отправки данных)
// moneySubmit.addEventListener('click', () => {
//     // Ваш код для отправки данных или выполнения других действий
//     console.log('отправка')
// });
//
// bubbles.forEach(bub => {
//     const size = (Math.random() * window.innerWidth * .2) + 'px';
//     bub.style.width = size;
//     bub.style.height = size;
//     bub.style.top = (Math.random() * 100) + '%';
//     bub.style.left = (Math.random() * 100) + '%';
// })