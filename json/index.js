const fs = require('fs');
const objData = {
    name: "Shubham",
    email: "shubham@triadweb.in",
    mobile: 9765544879,
    address: "Uttam Nagar, New Delhi"
}

console.log(objData.address);
const jsonData = JSON.stringify(objData);
console.log(jsonData);
const parseData = JSON.parse(jsonData);
console.log(parseData);

fs.writeFile("json.txt", jsonData, (err) => {
    console.log('JSON file created');
});

fs.readFile('json.txt', 'utf-8', (err, data) => {
    console.log(data);
});