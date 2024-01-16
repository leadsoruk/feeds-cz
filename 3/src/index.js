const range = document.querySelector('.popup__range');
const value = document.querySelector('.popup__value-number');

range.addEventListener('input', (e) => {

    value.textContent = e.target.value;
})