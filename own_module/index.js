/* ======================== 1st method ========================
const oper = require ('./oper');

console.log(oper.add(5,5));
console.log(oper.name);*/

// ========================= 2nd method =========================
const {add, name} = require ('./oper');

console.log(add(5,5));
console.log(name);