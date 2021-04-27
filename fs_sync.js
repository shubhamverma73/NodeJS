const fs = require('fs');

// ========================= Create directory =========================
//fs.mkdirSync("shubham");

// ========================= Creating a new file ========================= 
//fs.writeFileSync("read.txt", "My first create file using module");
//fs.writeFileSync("read.txt", "My first create file using module, and now going to owrrite");


// ========================= Updating existing file ========================= 
//fs.appendFileSync("read.txt", " Adding some other text on it");


// ========================= Read existing file ========================= 
const read_data = fs.readFileSync("read.txt");
//console.log(read_data); //Return binary data only so read it for human need to use toString function
data = read_data.toString();
console.log(data);

// ============================== OR ============================
const read_data_with_encrypt_method = fs.readFileSync("read.txt", 'utf8');
console.log(read_data_with_encrypt_method);

// ========================= Rename file ========================= 
//fs.renameSync("reads.txt", "read.txt");


// ========================= Delete file ========================= 
//fs.writeFileSync("delete.txt", "Need to delete file after create");
//fs.unlinkSync("delete.txt");


// ========================= Delete folder =========================
fs.rmdirSync("shubham");
