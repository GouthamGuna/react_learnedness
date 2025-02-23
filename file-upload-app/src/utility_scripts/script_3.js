import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';
import dotenv from 'dotenv'

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config(); // Load environment variables from .env file

async function fetchImage(url) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
    });
    return response.data;
}

async function urls() {
    const filePath = path.join(__dirname, 'database', 'q_latina.json'); // ready to run
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const imageUrls = [];

    data.videos.forEach((e) => {
        e.thumbs.forEach((i) => {
            console.log('print wr : ', i.src);
            imageUrls.push(i.src);
        });
    });

    return imageUrls;
}

async function uploadImagesToMongoDB(imageUrls) {
    const client = new MongoClient('mongodb://localhost:27017/zx');

    try {
        await client.connect();
        const database = client.db('zx');
        const collection = database.collection('images');

        for (const [index, url] of imageUrls.entries()) {
            try {
                console.log(`Fetching index ${index}...`);
                const imageData = await fetchImage(url);
                const imageDocument = {
                    _id: new ObjectId(),
                    data: imageData,
                    fileName: path.basename(url),
                };

                await collection.insertOne(imageDocument);
                console.log(`Uploaded ${url} to MongoDB.`);
            } catch (error) {
                console.error(`Failed to fetch or upload ${url}: ${error.message}`);
            }
        }
    } finally {
        await client.close();
    }
}

urls().then((imageUrls) => {
    return uploadImagesToMongoDB(imageUrls);
}).then(() => {
    console.log('All images fetched and uploaded to MongoDB.');
}).catch((error) => {
    console.error('Error:', error);
});
