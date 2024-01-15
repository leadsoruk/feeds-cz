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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xyXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dTbGlkZSgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZSA9IC1pbmRleCAqIDEwMCArIFwiJVwiO1xyXG4gICAgICAgIHNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyB0cmFuc2xhdGVWYWx1ZSArIFwiKVwiO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hvdyB0aGUgbGFzdCBzbGlkZSB3aGVuIHRoZSBwYWdlIGxvYWRzXHJcbiAgICBzaG93U2xpZGUoKTtcclxuXHJcbiAgICAvLyBBdXRvbWF0aWNhbGx5IHRyYW5zaXRpb24gdG8gdGhlIGxhc3Qgc2xpZGVcclxuICAgIC8vIHNldEludGVydmFsKHNob3dTbGlkZSwgMTAwMCk7IC8vIEFkanVzdCB0aGUgaW50ZXJ2YWwgYXMgbmVlZGVkXHJcbn0pO1xyXG5cclxuLy8gLy8g0J/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLIERPTVxyXG4vLyBjb25zdCBtb25leVJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5LXJhbmdlJyk7XHJcbi8vIGNvbnN0IG1vbmV5TnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbmV5LW51bWJlcicpO1xyXG4vLyBjb25zdCBtb25leVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25leV9fc3VibWl0Jyk7XHJcbi8vXHJcbi8vIGNvbnN0IGJ1YmJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnViYmxlJyk7XHJcbi8vIC8vIG1vbmV5TnVtYmVyLmZvY3VzKClcclxuLy9cclxuLy8gY29uc3QgbWluID0gIDEwMDA7XHJcbi8vIGNvbnN0IG1heCA9ICAxMDAwMDA7XHJcbi8vIGNvbnN0IHN0ZXAgPSAxMDAwO1xyXG4vLyBjb25zdCBmaXJzdFZhbHVlID0gNTAwMDtcclxuLy9cclxuLy8gbW9uZXlSYW5nZS5taW4gPSBtaW47XHJcbi8vIG1vbmV5UmFuZ2UubWF4ID0gbWF4O1xyXG4vLyBtb25leVJhbmdlLnN0ZXAgPSBzdGVwO1xyXG4vLyBtb25leU51bWJlci5taW4gPSBtaW47XHJcbi8vIG1vbmV5TnVtYmVyLm1heCA9IG1heDtcclxuLy8gbW9uZXlOdW1iZXIuc3RlcCA9IHN0ZXA7XHJcbi8vXHJcbi8vIGNvbnN0IG1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb25leV9fdXAtdmFsdWVzIHNwYW4nKVxyXG4vL1xyXG4vLyBtaW5NYXhbMF0udGV4dENvbnRlbnQgPSBtaW4udG9TdHJpbmcoKTtcclxuLy8gbWluTWF4WzFdLnRleHRDb250ZW50ID0gbWF4LnRvU3RyaW5nKCk7XHJcbi8vIGNvbnNvbGUubG9nKG1pbk1heClcclxuLy9cclxuLy8gLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0L/QvtC70Y8g0LLQstC+0LTQsCDQuCDQv9C+0LvQt9GD0L3QutCwXHJcbi8vIG1vbmV5TnVtYmVyLnZhbHVlID0gZmlyc3RWYWx1ZTtcclxuLy8gbW9uZXlSYW5nZS52YWx1ZSA9IGZpcnN0VmFsdWU7XHJcbi8vXHJcbi8vIC8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC40LfQvNC10L3QtdC90LjRjyDQv9C+0LvQt9GD0L3QutCwXHJcbi8vIG1vbmV5UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbi8vICAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9GPINCy0LLQvtC00LAg0YDQsNCy0L3Ri9C8INC30L3QsNGH0LXQvdC40Y4g0L/QvtC70LfRg9C90LrQsFxyXG4vLyAgICAgbW9uZXlOdW1iZXIudmFsdWUgPSBtb25leVJhbmdlLnZhbHVlO1xyXG4vLyB9KTtcclxuLy9cclxuLy8gLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LjQt9C80LXQvdC10L3QuNGPINC30L3QsNGH0LXQvdC40Y8g0L/QvtC70Y8g0LLQstC+0LTQsFxyXG4vLyBtb25leU51bWJlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuLy8gICAgIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0L/QvtC70LfRg9C90LrQsCDRgNCw0LLQvdGL0Lwg0LfQvdCw0YfQtdC90LjRjiDQv9C+0LvRjyDQstCy0L7QtNCwXHJcbi8vICAgICBtb25leVJhbmdlLnZhbHVlID0gbW9uZXlOdW1iZXIudmFsdWU7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyAvLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDQvdCw0LbQsNGC0LjRjyDQutC90L7Qv9C60Lggc3VibWl0ICjQstCw0YjQsCDQu9C+0LPQuNC60LAg0LTQu9GPINC+0YLQv9GA0LDQstC60Lgg0LTQsNC90L3Ri9GFKVxyXG4vLyBtb25leVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgIC8vINCS0LDRiCDQutC+0LQg0LTQu9GPINC+0YLQv9GA0LDQstC60Lgg0LTQsNC90L3Ri9GFINC40LvQuCDQstGL0L/QvtC70L3QtdC90LjRjyDQtNGA0YPQs9C40YUg0LTQtdC50YHRgtCy0LjQuVxyXG4vLyAgICAgY29uc29sZS5sb2coJ9C+0YLQv9GA0LDQstC60LAnKVxyXG4vLyB9KTtcclxuLy9cclxuLy8gYnViYmxlcy5mb3JFYWNoKGJ1YiA9PiB7XHJcbi8vICAgICBjb25zdCBzaXplID0gKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAqIC4yKSArICdweCc7XHJcbi8vICAgICBidWIuc3R5bGUud2lkdGggPSBzaXplO1xyXG4vLyAgICAgYnViLnN0eWxlLmhlaWdodCA9IHNpemU7XHJcbi8vICAgICBidWIuc3R5bGUudG9wID0gKE1hdGgucmFuZG9tKCkgKiAxMDApICsgJyUnO1xyXG4vLyAgICAgYnViLnN0eWxlLmxlZnQgPSAoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAnJSc7XHJcbi8vIH0pIl19
