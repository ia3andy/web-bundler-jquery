import $ from 'jquery';
import "bootstrap-icons/font/bootstrap-icons.css";

function endCountdown() {
    $.get('/hello', (data) => {
        $('.toast-title').html(`RECEIVED DATA FROM QUARKUS API`);
        $('.toast-body').html(`<b>${data}</b>`);
    });
}

let count = 5;

const timer = setInterval(function () {
    handleTimer(count);
}, 1000);

function handleTimer() {
    if (count === 0) {
        clearInterval(timer);
        endCountdown();
    } else {
        $('.toast-title').html(`CALLING QUARKUS API IN`);
        $('.toast-body').html(`<div class="count">${count}</div>`);
        count--;
    }
}

handleTimer(count);

