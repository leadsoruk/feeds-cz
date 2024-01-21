const hours = document.querySelector('.timer__hours')
const minutes = document.querySelector('.timer__minutes')
const seconds = document.querySelector('.timer__seconds')
let initTime;

if(localStorage.timer) {
    const time = JSON.parse(localStorage.timer)
    const newDate = new Date()
    initTime = (time.hours * 60 * 60 + time.minutes * 60 + time.seconds) + (24 * 60 * 60) - (newDate.getSeconds() + newDate.getMinutes() * 60 + newDate.getHours() * 60 * 60)
} else {
    initTime = 24 * 60 * 60;
    const newDate = new Date()
    const time = {
        hours: newDate.getHours(),
        minutes: newDate.getMinutes(),
        seconds: newDate.getSeconds(),
    }
    localStorage.timer = JSON.stringify(time);
}

function setTime(initTime) {
    const hoursNumber = Math.floor(initTime / (60 * 60));
    const minutesNumber = Math.floor(initTime % (60 * 60) / 60);
    const secondsNumber = initTime % 60;
    hours.textContent = hoursNumber.toString().padStart(2, '0');
    minutes.textContent = minutesNumber.toString().padStart(2, '0');
    seconds.textContent = secondsNumber.toString().padStart(2, '0');
}

setTime(initTime)

let timerId = setInterval(() => {
    if (initTime < 1) {
        clearInterval(timerId);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
    } else {
        initTime -= 1;
        setTime(initTime)
    }
}, 1000);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXJfX2hvdXJzJylcclxuY29uc3QgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcl9fbWludXRlcycpXHJcbmNvbnN0IHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXJfX3NlY29uZHMnKVxyXG5sZXQgaW5pdFRpbWU7XHJcblxyXG5pZihsb2NhbFN0b3JhZ2UudGltZXIpIHtcclxuICAgIGNvbnN0IHRpbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50aW1lcilcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBpbml0VGltZSA9ICh0aW1lLmhvdXJzICogNjAgKiA2MCArIHRpbWUubWludXRlcyAqIDYwICsgdGltZS5zZWNvbmRzKSArICgyNCAqIDYwICogNjApIC0gKG5ld0RhdGUuZ2V0U2Vjb25kcygpICsgbmV3RGF0ZS5nZXRNaW51dGVzKCkgKiA2MCArIG5ld0RhdGUuZ2V0SG91cnMoKSAqIDYwICogNjApXHJcbn0gZWxzZSB7XHJcbiAgICBpbml0VGltZSA9IDI0ICogNjAgKiA2MDtcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCB0aW1lID0ge1xyXG4gICAgICAgIGhvdXJzOiBuZXdEYXRlLmdldEhvdXJzKCksXHJcbiAgICAgICAgbWludXRlczogbmV3RGF0ZS5nZXRNaW51dGVzKCksXHJcbiAgICAgICAgc2Vjb25kczogbmV3RGF0ZS5nZXRTZWNvbmRzKCksXHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2UudGltZXIgPSBKU09OLnN0cmluZ2lmeSh0aW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGltZShpbml0VGltZSkge1xyXG4gICAgY29uc3QgaG91cnNOdW1iZXIgPSBNYXRoLmZsb29yKGluaXRUaW1lIC8gKDYwICogNjApKTtcclxuICAgIGNvbnN0IG1pbnV0ZXNOdW1iZXIgPSBNYXRoLmZsb29yKGluaXRUaW1lICUgKDYwICogNjApIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kc051bWJlciA9IGluaXRUaW1lICUgNjA7XHJcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IGhvdXJzTnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIG1pbnV0ZXMudGV4dENvbnRlbnQgPSBtaW51dGVzTnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIHNlY29uZHMudGV4dENvbnRlbnQgPSBzZWNvbmRzTnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxufVxyXG5cclxuc2V0VGltZShpbml0VGltZSlcclxuXHJcbmxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRUaW1lIDwgMSkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSAnMDAnO1xyXG4gICAgICAgIG1pbnV0ZXMudGV4dENvbnRlbnQgPSAnMDAnO1xyXG4gICAgICAgIHNlY29uZHMudGV4dENvbnRlbnQgPSAnMDAnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbml0VGltZSAtPSAxO1xyXG4gICAgICAgIHNldFRpbWUoaW5pdFRpbWUpXHJcbiAgICB9XHJcbn0sIDEwMDApOyJdfQ==
