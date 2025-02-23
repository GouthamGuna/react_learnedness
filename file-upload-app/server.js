import express, { json } from "express";
import cors from "cors";
import itemRoutes from './src/routes/itemRoutes.js'; // Corrected import path
import uploadRoutes from './src/routes/uploadRoutes.js';
import imageRoutes from './src/utility_scripts/imageRoutes.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(json());

const corsOptions = {
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500/'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Use routes
app.use(itemRoutes);
app.use(uploadRoutes);
app.use(imageRoutes);

// Mount multiple routers at /api/v1 prefix
app.use('/api/v1', [itemRoutes, uploadRoutes, imageRoutes]);