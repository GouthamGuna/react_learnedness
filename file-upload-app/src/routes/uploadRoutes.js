import { Router } from "express";
import mongoose from "mongoose";
import { MongoClient } from 'mongodb';
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
import dotenv from 'dotenv'

const router = Router();
dotenv.config(); // Load environment variables from .env file

// MongoDB URI
const mongoURI = process.env.DB_URL;

// Connect to MongoDB
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: `${file.originalname}`,
      bucketName: "uploads", // Collection name for storing files
    };
  },
});

// File filter to accept only MP4 files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'video/mp4') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .mp4 format allowed!'));
  }
};

// Initialize upload variable
const upload = multer({ storage, fileFilter });

// Routes

// Upload File
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No MP4 file uploaded. Only .mp4 format allowed!' });
  }
  res.status(201).send({ file: req.file });
});

// Get List of Files
router.get('/files', async (req, res) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db();
    const filesCollection = database.collection('uploads.files');
    const files = await filesCollection.find().toArray();

    // Add streaming URL to each file object
    const filesWithUrls = files.map(file => {
      return {
        ...file,
        streaming_url: `http://localhost:${process.env.PORT || 3000}/api/v1/stream/${file._id}`
      };
    });

    res.status(200).send(filesWithUrls);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).send('Error fetching files');
  } finally {
    await client.close();
  }
});


// Route to fetch a specific file by ID
/*router.get('/stream/:id', async (req, res) => {
  const id = req.params.id;
  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'uploads'
  });

  // Set the appropriate headers for video streaming
  res.set('Content-Type', 'video/mp4');
  res.set('Content-Disposition', 'inline');

  bucket
      .openDownloadStream(new mongoose.Types.ObjectId(id))
      .pipe(res)
      .on('error', () => {
          res.status(404).send({ message: 'File not found' });
      });
});*/

// Route to fetch and stream a specific file by ID with range support
/*router.get('/stream/:id', async (req, res) => {
    const id = req.params.id;
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'uploads'
    });

    const fileInfo = await mongoose.connection.db.collection('uploads.files').findOne({ _id: new mongoose.Types.ObjectId(id) });

    if (!fileInfo) {
        return res.status(404).send({ message: 'File not found' });
    }

    const range = req.headers.range;
    if (!range) {
        return res.status(400).send({ message: 'Range header is required' });
    }

    const fileSize = fileInfo.length;
    const CHUNK_SIZE = 10 ** 6; // 1MB chunks
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength,
        'Content-Type': 'video/mp4',
    };

    res.writeHead(206, headers);

    bucket.openDownloadStream(new mongoose.Types.ObjectId(id), { start, end })
        .pipe(res)
        .on('error', () => {
            res.status(404).send({ message: 'File not found' });
        });
});*/

router.get('/stream/:id', async (req, res) => {
  const id = req.params.id;
  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });

  const fileInfo = await mongoose.connection.db.collection('uploads.files').findOne({ _id: new mongoose.Types.ObjectId(id) });

  if (!fileInfo) {
    return res.status(404).send({ message: 'File not found' });
  }

  const range = req.headers.range || 'bytes=0-';
  const fileSize = fileInfo.length;
  const [startStr, endStr] = range.replace(/bytes=/, '').split('-');
  const start = parseInt(startStr, 10);
  const end = endStr ? parseInt(endStr, 10) : fileSize - 1;

  if (isNaN(start) || isNaN(end) || start >= fileSize || end >= fileSize) {
    return res.status(416).send({ message: 'Requested range not satisfiable' });
  }

  const contentLength = end - start + 1;
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  res.writeHead(206, headers);

  bucket.openDownloadStream(new mongoose.Types.ObjectId(id), { start, end })
    .pipe(res)
    .on('error', () => {
      res.status(404).send({ message: 'File not found' });
    });
});

export default router;
