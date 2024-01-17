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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C+0LvRg9GH0LDQtdC8INGN0LvQtdC80LXQvdGC0YsgRE9NXHJcbmNvbnN0IG1vbmV5UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXktcmFuZ2UnKTtcclxuY29uc3QgbW9uZXlOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXktbnVtYmVyJyk7XHJcbmNvbnN0IG1vbmV5U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmV5X19zdWJtaXQnKTtcclxuXHJcbmNvbnN0IGJ1YmJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnViYmxlJyk7XHJcbi8vIG1vbmV5TnVtYmVyLmZvY3VzKClcclxuXHJcbmNvbnN0IG1pbiA9ICAxMDA7XHJcbmNvbnN0IG1heCA9ICAxMDAwMDA7XHJcbmNvbnN0IHN0ZXAgPSAxMDAwO1xyXG5jb25zdCBmaXJzdFZhbHVlID0gNTAwMDtcclxuXHJcbm1vbmV5UmFuZ2UubWluID1NYXRoLm1heChtaW4sIHN0ZXApO1xyXG5tb25leVJhbmdlLm1heCA9IG1heDtcclxuLy8gbW9uZXlSYW5nZS5zdGVwID0gc3RlcDtcclxuLy8gbW9uZXlOdW1iZXIubWluID0gbWluO1xyXG4vLyBtb25leU51bWJlci5tYXggPSBtYXg7XHJcbi8vIG1vbmV5TnVtYmVyLnN0ZXAgPSBzdGVwO1xyXG5cclxuLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0L/QvtC70Y8g0LLQstC+0LTQsCDQuCDQv9C+0LvQt9GD0L3QutCwXHJcbm1vbmV5TnVtYmVyLnZhbHVlID0gZm9ybWF0TnVtYmVyKGZpcnN0VmFsdWUgKyAnJyk7XHJcbm1vbmV5UmFuZ2UudmFsdWUgPSBmaXJzdFZhbHVlO1xyXG5cclxuLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LjQt9C80LXQvdC10L3QuNGPINC/0L7Qu9C30YPQvdC60LBcclxubW9uZXlSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0L/QvtC70Y8g0LLQstC+0LTQsCDRgNCw0LLQvdGL0Lwg0LfQvdCw0YfQtdC90LjRjiDQv9C+0LvQt9GD0L3QutCwXHJcbiAgICBjb25zdCB2YWx1ZSA9IChNYXRoLnJvdW5kKG1vbmV5UmFuZ2UudmFsdWUgLyBzdGVwKSAqIHN0ZXApXHJcbiAgICBtb25leVJhbmdlLnZhbHVlID0gdmFsdWU7XHJcbiAgICBtb25leU51bWJlci52YWx1ZSA9IGZvcm1hdE51bWJlcih2YWx1ZSArICcnKTtcclxufSk7XHJcblxyXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQuNC30LzQtdC90LXQvdC40Y8g0LfQvdCw0YfQtdC90LjRjyDQv9C+0LvRjyDQstCy0L7QtNCwXHJcbm1vbmV5TnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LvQt9GD0L3QutCwINGA0LDQstC90YvQvCDQt9C90LDRh9C10L3QuNGOINC/0L7Qu9GPINCy0LLQvtC00LBcclxuICAgIGxldCB2YWx1ZSA9IG1vbmV5TnVtYmVyLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XHJcbiAgICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgICBtb25leVJhbmdlLnZhbHVlID0gbWluXHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgICAgbW9uZXlSYW5nZS52YWx1ZSA9IHZhbHVlLnNsaWNlKDEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vbmV5UmFuZ2UudmFsdWUgPSB2YWx1ZVxyXG4gICAgfVxyXG4gICAgIC8vID0gdmFsdWUgPiBtYXggPyB2YWx1ZS5zcGxpY2UoMCwgdmFsdWUubGVuZ3RoIC0gMiwgJycpIDogdmFsdWU7XHJcbiAgICBtb25leU51bWJlci52YWx1ZSA9IGZvcm1hdE51bWJlcihtb25leVJhbmdlLnZhbHVlKVxyXG59KTtcclxuXHJcbm1vbmV5TnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IChNYXRoLnJvdW5kKG1vbmV5UmFuZ2UudmFsdWUgLyBzdGVwKSAqIHN0ZXApXHJcbiAgICBtb25leVJhbmdlLnZhbHVlID0gdmFsdWU7XHJcbiAgICBtb25leU51bWJlci52YWx1ZSA9IGZvcm1hdE51bWJlcih2YWx1ZSArICcnKTtcclxufSlcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC90LDQttCw0YLQuNGPINC60L3QvtC/0LrQuCBzdWJtaXQgKNCy0LDRiNCwINC70L7Qs9C40LrQsCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQtNCw0L3QvdGL0YUpXHJcbm1vbmV5U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8g0JLQsNGIINC60L7QtCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQtNCw0L3QvdGL0YUg0LjQu9C4INCy0YvQv9C+0LvQvdC10L3QuNGPINC00YDRg9Cz0LjRhSDQtNC10LnRgdGC0LLQuNC5XHJcbiAgICBjb25zb2xlLmxvZygn0L7RgtC/0YDQsNCy0LrQsCcpXHJcbn0pO1xyXG5cclxuYnViYmxlcy5mb3JFYWNoKGJ1YiA9PiB7XHJcbiAgICBjb25zdCBzaXplID0gKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAqIC4yKSArICdweCc7XHJcbiAgICBidWIuc3R5bGUud2lkdGggPSBzaXplO1xyXG4gICAgYnViLnN0eWxlLmhlaWdodCA9IHNpemU7XHJcbiAgICBidWIuc3R5bGUudG9wID0gKE1hdGgucmFuZG9tKCkgKiAxMDApICsgJyUnO1xyXG4gICAgYnViLnN0eWxlLmxlZnQgPSAoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAnJSc7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIoaW5wdXRWYWx1ZSkge1xyXG4gICAgcmV0dXJuIGlucHV0VmFsdWUucmVwbGFjZSgvXFxEL2csICcnKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xyXG59Il19
