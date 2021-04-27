const os = require('os');

console.log(os.type());
console.log(os.arch());
console.log(`${os.freemem()/1021/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.version());