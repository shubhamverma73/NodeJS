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
 
connection.query('SELECT * from products', function (error, results) {
  if (error) throw error;
  console.log(results);
  console.log('ROWs are: ', results[0].name);
});
 
connection.end();