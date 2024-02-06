// Получаем элементы DOM
const moneyRange = document.getElementById('money-range');
const moneyNumber = document.getElementById('money-number');
const moneySubmit = document.querySelector('.money__submit');

const bubbles = document.querySelectorAll('.bubble');
// moneyNumber.focus()

const min =  100;
const max =  100000;
const step = 1000;
const firstValue = 5000;

moneyRange.min =Math.max(min, step);
moneyRange.max = max;
// moneyRange.step = step;
// moneyNumber.min = min;
// moneyNumber.max = max;
// moneyNumber.step = step;

// Устанавливаем начальное значение поля ввода и ползунка
moneyNumber.value = formatNumber(firstValue + '');
moneyRange.value = firstValue;

// Обработчик изменения ползунка
moneyRange.addEventListener('input', () => {
    // Устанавливаем значение поля ввода равным значению ползунка
    const value = (Math.round(moneyRange.value / step) * step)
    moneyRange.value = value;
    moneyNumber.value = formatNumber(value + '');
});

// Обработчик изменения значения поля ввода
moneyNumber.addEventListener('input', () => {
    // Устанавливаем значение ползунка равным значению поля ввода
    let value = moneyNumber.value.replace(/\D/g, '');
    if (value < min) {
        moneyRange.value = min
    } else if (value > max) {
        moneyRange.value = value.slice(1)
    } else {
        moneyRange.value = value
    }
     // = value > max ? value.splice(0, value.length - 2, '') : value;
    moneyNumber.value = formatNumber(moneyRange.value)
});

moneyNumber.addEventListener('blur', () => {
    const value = (Math.round(moneyRange.value / step) * step)
    moneyRange.value = value;
    moneyNumber.value = formatNumber(value + '');
})

// Обработчик нажатия кнопки submit (ваша логика для отправки данных)
moneySubmit.addEventListener('click', () => {
    // Ваш код для отправки данных или выполнения других действий
    console.log('отправка')
});

bubbles.forEach(bub => {
    const size = (Math.random() * window.innerWidth * .2) + 'px';
    bub.style.width = size;
    bub.style.height = size;
    bub.style.top = (Math.random() * 100) + '%';
    bub.style.left = (Math.random() * 100) + '%';
})

function formatNumber(inputValue) {
    return inputValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}