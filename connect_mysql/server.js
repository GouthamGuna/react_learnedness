console.log("logger : ", "init server.js");
const express = require('express');
const mysql = require('mysql');
const serverPort = 5000;
const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"root",
    database: "test_school_new"
});

app.get("/student", (req, res) => {

    const sql = 'SELECT * FROM `student_registration`;';

    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.listen(serverPort, () => {
    console.log("logger : ", 'Server running port ${serverPort}...');
})