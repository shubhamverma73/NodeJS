const fs = require("fs");

// ========================= Create directory =========================
fs.mkdir("shubham", (err) => {
    console.log('Folder is created');
    console.log(err);
});

// ========================= Create a new file =========================
/*fs.writeFile("read_async.txt", "My first create file using node module async", (err) => {
    console.log('File is created');
});
fs.writeFile("read_async.txt", "My first create file using node module async, and now going to owrrite",
(err) => {
    console.log('File is created');
});*/


// ========================= Updating existing file =========================
/*fs.appendFile("read_async.txt", ". New data added", (err) => {
    console.log("file updated");
});*/

// ========================= Read existing file ========================= 
/*fs.readFile("read_async.txt", 'utf8', (err, data) => {
    console.log(data);
});*/


// ========================= Rename file =========================
/*fs.rename("read_asyncs.txt", "read_async.txt", (err) => {
    console.log("Renamed file");
});*/

// ========================= Delete file ========================= 
/*fs.writeFile('for_delete.txt', "delete this file after create", (err) => {
    console.log('File created');
});
fs.unlink('for_delete.txt', (err) => {
    console.log('file deleted successfully.');
});*/

// ========================= Delete folder =========================
/*fs.rmdir('shubham', (err) => {
    console.log("folder remove successfully.");
});*/
