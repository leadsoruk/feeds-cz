// Получаем элементы DOM
const moneyRange = document.getElementById('money-range');
const moneyNumber = document.getElementById('money-number');
const moneySubmit = document.querySelector('.money__submit');

const bubbles = document.querySelectorAll('.bubble');
// moneyNumber.focus()

const min =  1000;
const max =  100000;
const step = 1000;
const firstValue = 5000;

moneyRange.min = min;
moneyRange.max = max;
moneyRange.step = step;
moneyNumber.min = min;
moneyNumber.max = max;
moneyNumber.step = step;

const minMax = document.querySelectorAll('.money__up-values span')

minMax[0].textContent = min.toString();
minMax[1].textContent = max.toString();
console.log(minMax)

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LvRg9GH0LDQtdC8INGN0LvQtdC80LXQvdGC0YsgRE9NXHJcbmNvbnN0IG1vbmV5UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXktcmFuZ2UnKTtcclxuY29uc3QgbW9uZXlOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXktbnVtYmVyJyk7XHJcbmNvbnN0IG1vbmV5U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmV5X19zdWJtaXQnKTtcclxuXHJcbmNvbnN0IGJ1YmJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnViYmxlJyk7XHJcbi8vIG1vbmV5TnVtYmVyLmZvY3VzKClcclxuXHJcbmNvbnN0IG1pbiA9ICAxMDAwO1xyXG5jb25zdCBtYXggPSAgMTAwMDAwO1xyXG5jb25zdCBzdGVwID0gMTAwMDtcclxuY29uc3QgZmlyc3RWYWx1ZSA9IDUwMDA7XHJcblxyXG5tb25leVJhbmdlLm1pbiA9IG1pbjtcclxubW9uZXlSYW5nZS5tYXggPSBtYXg7XHJcbm1vbmV5UmFuZ2Uuc3RlcCA9IHN0ZXA7XHJcbm1vbmV5TnVtYmVyLm1pbiA9IG1pbjtcclxubW9uZXlOdW1iZXIubWF4ID0gbWF4O1xyXG5tb25leU51bWJlci5zdGVwID0gc3RlcDtcclxuXHJcbmNvbnN0IG1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb25leV9fdXAtdmFsdWVzIHNwYW4nKVxyXG5cclxubWluTWF4WzBdLnRleHRDb250ZW50ID0gbWluLnRvU3RyaW5nKCk7XHJcbm1pbk1heFsxXS50ZXh0Q29udGVudCA9IG1heC50b1N0cmluZygpO1xyXG5jb25zb2xlLmxvZyhtaW5NYXgpXHJcblxyXG4vLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LvRjyDQstCy0L7QtNCwINC4INC/0L7Qu9C30YPQvdC60LBcclxubW9uZXlOdW1iZXIudmFsdWUgPSBmaXJzdFZhbHVlO1xyXG5tb25leVJhbmdlLnZhbHVlID0gZmlyc3RWYWx1ZTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC40LfQvNC10L3QtdC90LjRjyDQv9C+0LvQt9GD0L3QutCwXHJcbm1vbmV5UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9GPINCy0LLQvtC00LAg0YDQsNCy0L3Ri9C8INC30L3QsNGH0LXQvdC40Y4g0L/QvtC70LfRg9C90LrQsFxyXG4gICAgbW9uZXlOdW1iZXIudmFsdWUgPSBtb25leVJhbmdlLnZhbHVlO1xyXG59KTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC40LfQvNC10L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPINC/0L7Qu9GPINCy0LLQvtC00LBcclxubW9uZXlOdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9C30YPQvdC60LAg0YDQsNCy0L3Ri9C8INC30L3QsNGH0LXQvdC40Y4g0L/QvtC70Y8g0LLQstC+0LTQsFxyXG4gICAgbW9uZXlSYW5nZS52YWx1ZSA9IG1vbmV5TnVtYmVyLnZhbHVlO1xyXG59KTtcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC90LDQttCw0YLQuNGPINC60L3QvtC/0LrQuCBzdWJtaXQgKNCy0LDRiNCwINC70L7Qs9C40LrQsCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQtNCw0L3QvdGL0YUpXHJcbm1vbmV5U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8g0JLQsNGIINC60L7QtCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQtNCw0L3QvdGL0YUg0LjQu9C4INCy0YvQv9C+0LvQvdC10L3QuNGPINC00YDRg9Cz0LjRhSDQtNC10LnRgdGC0LLQuNC5XHJcbiAgICBjb25zb2xlLmxvZygn0L7RgtC/0YDQsNCy0LrQsCcpXHJcbn0pO1xyXG5cclxuYnViYmxlcy5mb3JFYWNoKGJ1YiA9PiB7XHJcbiAgICBjb25zdCBzaXplID0gKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAqIC4yKSArICdweCc7XHJcbiAgICBidWIuc3R5bGUud2lkdGggPSBzaXplO1xyXG4gICAgYnViLnN0eWxlLmhlaWdodCA9IHNpemU7XHJcbiAgICBidWIuc3R5bGUudG9wID0gKE1hdGgucmFuZG9tKCkgKiAxMDApICsgJyUnO1xyXG4gICAgYnViLnN0eWxlLmxlZnQgPSAoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAnJSc7XHJcbn0pIl19
