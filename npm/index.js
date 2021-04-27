//https://www.npmjs.com/package/nodemon
// and delete nodemon.ps1 file in C:\Users\Admin\AppData\Roaming\npm path
const validator = require('validator');

const email = validator.isEmail('shubham@gmail.com');
console.log(email);

const mob = validator.isMobilePhone('975448859');
console.log(mob);

const pass = validator.isStrongPassword('975448859@Ss');
console.log(pass);