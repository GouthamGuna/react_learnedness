console.log("logger : ", "init server.js");
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const serverPort = 5000;
const app = express();

app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"root",
    database: "gmsk"
});

app.get("/student", (req, res) => {

    const sql = 'SELECT * FROM `student_registration`;';

    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.get("/image", (req, res) => {

    const sql = 'SELECT * FROM `image_upload`;';

    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.get('/', function (req, res) {
  const data = fs.readFileSync('./image.png');
  res.render('page', { image: data.toString('base64') });
});

app.listen(serverPort, () => {
    console.log("logger : ", 'Server running port ${serverPort}...');
})