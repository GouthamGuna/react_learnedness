import express from 'express';
import mysql from 'mysql2/promise'; // Promise-based
import cors from 'cors';

const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root', // kindly changed from password
  database: 'db_name' // kindly changed from db_name
});

// Enable CORS only for specific port (3000)
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.post('/submitForm', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const query = 'INSERT INTO form_tbl (name, email, age) VALUES (?, ?, ?)';
    const [results] = await pool.execute(query, [name, email, age]);
    res.send('Form data saved!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving form data.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
