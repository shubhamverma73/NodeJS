const path = require('path');

console.log(path.dirname('D:/xampp/htdocs/test_files/nodejs/path.js')); //D:/xampp/htdocs/test_files/nodejs
console.log(path.extname('D:/xampp/htdocs/test_files/nodejs/path.js')); //.js
console.log(path.basename('D:/xampp/htdocs/test_files/nodejs/path.js')); //path.js
console.log(path.parse('D:/xampp/htdocs/test_files/nodejs/path.js'));
/*
{
  root: 'D:/',
  dir: 'D:/xampp/htdocs/test_files/nodejs',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
*/
const myPath = path.parse('D:/xampp/htdocs/test_files/nodejs/path.js');
console.log(myPath.name);