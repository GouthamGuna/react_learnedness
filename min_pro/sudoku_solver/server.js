const PORT = 8080;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.render('/index.html')
})

app.listen(PORT, () => console.log(`application running on ${PORT}`));
