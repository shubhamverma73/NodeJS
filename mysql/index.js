var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect(function(error, results) {
    if(error) {
        console.log('Could not connect to server: '+ error);
    } else {
        console.log('Connected to database successfully.');
    }
});
 
connection.query('SELECT * from product', function (error, results) {
  if (error) throw error;
  console.log('ROWs are: ', results[0].product_name);
});
 
connection.end();