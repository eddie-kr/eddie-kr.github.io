"use strict";

const name = "홍길동";
const alphas = "abc";
let id = 3;

console.log(`${name.length}`);
console.log(`${id}`);
console.log(`${alphas.length}`);


function abc(a) {
    console.log(a, typeof a);
    if (typeof a !== Number) {
        a = Number(a);
        console.log(a, "...");
        return a;
    } else {
        return NaN;
    }
}

console.log(abc(12));
console.log(abc("12"));
console.log(abc(true), abc(false));