const express = require("express");
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set('port', 8000);

app.get("/", (req,res)=>{
  connection.query('< MYSQL Query >', (err, rows)=>{
    if (err) throw err;

    console.log(rows);
    res.send(rows);
  })
})

const server = app.listen(app.get('port'), (err)=>{
  if (err)
    console.log(err)
  else
    console.log(`Server running on port ${app.get('port')}`)
})