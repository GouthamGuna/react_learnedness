import { Router } from "express";
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config();
const client = new MongoClient(process.env.DB_URL);
const router = Router();

// http://localhost:3000/api/v1/images_data?page=1&limit=100

router.get('/images_data', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('zx');
        const collection = database.collection('images');

        // Get page and limit from query parameters (default to page 1 and limit 100)
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 100;

        // Calculate the number of documents to skip
        const skip = (page - 1) * limit;

        // Fetch documents with pagination
        const data = await collection.find({})
            .skip(skip)
            .limit(limit)
            .toArray();

        // Get the total count of documents
        const totalDocuments = await collection.countDocuments();

        // Send the fetched data and pagination info as a JSON response
        let totalPages = Math.ceil(totalDocuments / limit);
        res.json({
            page,
            limit,
            totalDocuments,
            totalPages: totalPages,
            remainingPages: Math.ceil(totalPages - page),
            data
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    } finally {
        await client.close();
    }
});

export default router;
