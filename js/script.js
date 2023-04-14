'use script';

// console.log('Запрос данных....');

// setTimeout(() => {
//     console.log('Подготовка данных....');

//     const product ={
//         name: 'TV',
//         price: 3500
//     };

//     setTimeout(() => {
//         product.state = 'odered';
//         console.log(product);
//     });
// }, 2000);

// const promise = new Promise(function(resolve, reject) {
//         console.log('Запрос данных....');

//     setTimeout(() => {
//         console.log('Подготовка данных....');

//         const product ={
//             name: 'TV',
//             price: 3500
//         };

//        resolve(product);

//     }, 2000);
// });

// // promise.then((product) => {
// //     console.log('Данные получены!');
// //     setTimeout(() => {
// //         product.state = 'odered';
// //         console.log(product);
// //     }, 2000);
// // });

// promise.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         product.state = 'odered';
//         resolve(product);
//         // reject();
//     }, 2000);
//   });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(something => {
//     something.promis = 'resolve';
//     return something;
// }).then(last => {
//     console.log(last);
// }).catch(() => {
//     console.error('Make mistake...');
// }).finally(() => {
//     console.log('Finally! Make ALL Time!');
// });
  
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(5000).then(() => console.log('5000ms'));

// Promise.all([test(1000), test(5000)]).then(() => {
//     console.log('All resolve');
// }).catch(() => {
//     console.log('Error!');
// });

Promise.race([test(1000), test(5000)]).then(() => {
    console.log('All resolve');
}).catch(() => {
    console.log('Error!');
});



