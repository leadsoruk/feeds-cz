// Получаем элементы DOM
const moneyRange = document.getElementById('money-range');
const moneyNumber = document.getElementById('money-number');
const moneySubmit = document.querySelector('.money__submit');

const bubbles = document.querySelectorAll('.bubble');
moneyNumber.focus()

moneyRange.min = 1000;
moneyRange.max = 100000;
moneyRange.step = 1000;
moneyNumber.min = 1000;
moneyNumber.max = 100000;
moneyNumber.step = 1000;

const firstValue = 5000

// Устанавливаем начальное значение поля ввода и ползунка
moneyNumber.value = firstValue;
moneyRange.value = firstValue;

// Обработчик изменения ползунка
moneyRange.addEventListener('input', () => {
    // Устанавливаем значение поля ввода равным значению ползунка
    moneyNumber.value = moneyRange.value;
});

// Обработчик изменения значения поля ввода
moneyNumber.addEventListener('input', () => {
    // Устанавливаем значение ползунка равным значению поля ввода
    moneyRange.value = moneyNumber.value;
});

// Обработчик нажатия кнопки уменьшения
document.querySelector('.money__btn[data-money="-1000"]').addEventListener('click', () => {
    // Уменьшаем значение поля ввода на 1000
    moneyNumber.value = Math.max(moneyRange.min, parseInt(moneyNumber.value) - 1000);
    // Обновляем значение ползунка
    moneyRange.value = moneyNumber.value;
});

// Обработчик нажатия кнопки увеличения
document.querySelector('.money__btn[data-money="1000"]').addEventListener('click', () => {
    // Увеличиваем значение поля ввода на 1000
    moneyNumber.value = Math.min(moneyRange.max, parseInt(moneyNumber.value) + 1000);
    // Обновляем значение ползунка
    moneyRange.value = moneyNumber.value;
});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCf0L7Qu9GD0YfQsNC10Lwg0Y3Qu9C10LzQtdC90YLRiyBET01cclxuY29uc3QgbW9uZXlSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leS1yYW5nZScpO1xyXG5jb25zdCBtb25leU51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leS1udW1iZXInKTtcclxuY29uc3QgbW9uZXlTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uZXlfX3N1Ym1pdCcpO1xyXG5cclxuY29uc3QgYnViYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWJibGUnKTtcclxubW9uZXlOdW1iZXIuZm9jdXMoKVxyXG5cclxubW9uZXlSYW5nZS5taW4gPSAxMDAwO1xyXG5tb25leVJhbmdlLm1heCA9IDEwMDAwMDtcclxubW9uZXlSYW5nZS5zdGVwID0gMTAwMDtcclxubW9uZXlOdW1iZXIubWluID0gMTAwMDtcclxubW9uZXlOdW1iZXIubWF4ID0gMTAwMDAwO1xyXG5tb25leU51bWJlci5zdGVwID0gMTAwMDtcclxuXHJcbmNvbnN0IGZpcnN0VmFsdWUgPSA1MDAwXHJcblxyXG4vLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LvRjyDQstCy0L7QtNCwINC4INC/0L7Qu9C30YPQvdC60LBcclxubW9uZXlOdW1iZXIudmFsdWUgPSBmaXJzdFZhbHVlO1xyXG5tb25leVJhbmdlLnZhbHVlID0gZmlyc3RWYWx1ZTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC40LfQvNC10L3QtdC90LjRjyDQv9C+0LvQt9GD0L3QutCwXHJcbm1vbmV5UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9GPINCy0LLQvtC00LAg0YDQsNCy0L3Ri9C8INC30L3QsNGH0LXQvdC40Y4g0L/QvtC70LfRg9C90LrQsFxyXG4gICAgbW9uZXlOdW1iZXIudmFsdWUgPSBtb25leVJhbmdlLnZhbHVlO1xyXG59KTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC40LfQvNC10L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPINC/0L7Qu9GPINCy0LLQvtC00LBcclxubW9uZXlOdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9C30YPQvdC60LAg0YDQsNCy0L3Ri9C8INC30L3QsNGH0LXQvdC40Y4g0L/QvtC70Y8g0LLQstC+0LTQsFxyXG4gICAgbW9uZXlSYW5nZS52YWx1ZSA9IG1vbmV5TnVtYmVyLnZhbHVlO1xyXG59KTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC90LDQttCw0YLQuNGPINC60L3QvtC/0LrQuCDRg9C80LXQvdGM0YjQtdC90LjRj1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uZXlfX2J0bltkYXRhLW1vbmV5PVwiLTEwMDBcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vINCj0LzQtdC90YzRiNCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9GPINCy0LLQvtC00LAg0L3QsCAxMDAwXHJcbiAgICBtb25leU51bWJlci52YWx1ZSA9IE1hdGgubWF4KG1vbmV5UmFuZ2UubWluLCBwYXJzZUludChtb25leU51bWJlci52YWx1ZSkgLSAxMDAwKTtcclxuICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9C30YPQvdC60LBcclxuICAgIG1vbmV5UmFuZ2UudmFsdWUgPSBtb25leU51bWJlci52YWx1ZTtcclxufSk7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQvdCw0LbQsNGC0LjRjyDQutC90L7Qv9C60Lgg0YPQstC10LvQuNGH0LXQvdC40Y9cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmV5X19idG5bZGF0YS1tb25leT1cIjEwMDBcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vINCj0LLQtdC70LjRh9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LvRjyDQstCy0L7QtNCwINC90LAgMTAwMFxyXG4gICAgbW9uZXlOdW1iZXIudmFsdWUgPSBNYXRoLm1pbihtb25leVJhbmdlLm1heCwgcGFyc2VJbnQobW9uZXlOdW1iZXIudmFsdWUpICsgMTAwMCk7XHJcbiAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LvQt9GD0L3QutCwXHJcbiAgICBtb25leVJhbmdlLnZhbHVlID0gbW9uZXlOdW1iZXIudmFsdWU7XHJcbn0pO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0L3QsNC20LDRgtC40Y8g0LrQvdC+0L/QutC4IHN1Ym1pdCAo0LLQsNGI0LAg0LvQvtCz0LjQutCwINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC00LDQvdC90YvRhSlcclxubW9uZXlTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyDQktCw0Ygg0LrQvtC0INC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC00LDQvdC90YvRhSDQuNC70Lgg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LTRgNGD0LPQuNGFINC00LXQudGB0YLQstC40LlcclxuICAgIGNvbnNvbGUubG9nKCfQvtGC0L/RgNCw0LLQutCwJylcclxufSk7XHJcblxyXG5idWJibGVzLmZvckVhY2goYnViID0+IHtcclxuICAgIGNvbnN0IHNpemUgPSAoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoICogLjIpICsgJ3B4JztcclxuICAgIGJ1Yi5zdHlsZS53aWR0aCA9IHNpemU7XHJcbiAgICBidWIuc3R5bGUuaGVpZ2h0ID0gc2l6ZTtcclxuICAgIGJ1Yi5zdHlsZS50b3AgPSAoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAnJSc7XHJcbiAgICBidWIuc3R5bGUubGVmdCA9IChNYXRoLnJhbmRvbSgpICogMTAwKSArICclJztcclxufSkiXX0=
