console.log("logger : ", "init server.js");

const express = require("express");
const mysql = require("mysql");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "krithvik",
});

app.get("/", (req, res) => {
  res.send("Hello Lunar *)");
});

app.listen(3000, () => {
  console.log("logger : ", "Server running port 3000...");
});
