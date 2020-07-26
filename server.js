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


const host = process.env.DB_HOST||conf.host;
const user = process.env.DB_USER||conf.user;
const pw = process.env.DB_PW||conf.password;
const dbname = process.env.DB_NAME||conf.database;

const connection = mysql.createConnection({
    socketPath: "/cloudsql/jamenadasql:asia-northeast3:jamesql",
    user: user,
    password: pw, 
    database: dbname
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