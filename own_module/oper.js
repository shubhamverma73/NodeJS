const add = (a, b) => {
    return a + b;
}

const name = 'Shubham';

/* ======================== 1st method ========================
module.exports.add = add;
module.exports.name = name;
 ======================== 1st method ========================*/

 
// ========================= 2nd method =========================
module.exports = {add, name};