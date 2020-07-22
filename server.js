const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: "james123",
    port: conf.port,
    database: conf.database
});
connection.connect();
 

app.get('/', (req, res) => { 
    res.send('Hello');
});
app.get('/api/customers', (req, res) => { 
    //return;
    connection.query(
      "SELECT * FROM customer WHERE isDeleted = 0",
        (err, rows, fields) => {
            if (err) {
                res.send(err); console.log(err);
            }
            else {
                
                res.send(rows);
            }
      }  
    );
}); 
app.listen(port, () => console.log(`Listening on port ${port}`));