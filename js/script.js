'use strict';

const inputHrv =document.querySelector('#hrv');
const inputUsd = document.querySelector('#usd');
console.log(inputUsd);

inputHrv.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    console.dir(request);

    // request.open(method, url, async, login, password);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         // console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputHrv.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Something wrong! Try late!';
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputHrv.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Something wrong! Try late!';
        }
    });

    // status
    // statusText
    // response
    // readyState
});
