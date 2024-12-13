'use strict';

let random = Math.random() * 2
let random2 = Math.random() * 100

console.log(random.toFixed(1));
console.log(random2.toFixed());
console.log(random2.toFixed() / 2);
console.log(random2.toFixed() % 2);

alert('random-2, * 2, tofixed(1) ' + random.toFixed(1))
alert('random-100, * 100, tofixed(0) ' + random2.toFixed())
alert('random-100, / 2, tofixed(0) ' + random2.toFixed() / 2)
alert('random-100, % 2, tofixed(0) ' + random2.toFixed() % 2)
