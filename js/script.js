//const now = new Date();

//now.setHours(21);
//console.log(now);

//const now1 = Date.parse('2023-04-06');
//console.log(now1);  //  1680739200000
//const now = new Date('2023-04-06');
//const now = new Date(2023, 4, 2, 22);   //2023-05-02T19:00:00.000Z
//const date = new Date(0);  //1970-01-01T00:00:00.000Z

//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDate());
//console.log(now.getHours());
//console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset());  //  -180
//console.log(now.getTime());  //  1680811605183


let start = new Date();

for (let i = 0; i < 1000000; i++) {
  let some = i ** 3;
}

let end = new Date();

let diff = end - start;
console.log(diff);