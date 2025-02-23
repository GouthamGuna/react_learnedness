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
dotenv.config();

async function downloadImage(url, savePath) {
    const writer = fs.createWriteStream(savePath);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

async function downloadImages(urls, directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    const imagePaths = [];

    for (const [index, url] of urls.entries()) {
        const fileName = path.basename(url);
        const savePath = path.join(directory, ((1000 + index) + "_" + fileName));
        try {
            await downloadImage(url, savePath);
            console.log(`Downloaded ${index + 1}/${urls.length}: ${url}`);
            imagePaths.push(savePath);
        } catch (error) {
            console.error(`Failed to download ${url}: ${error.message}`);
        }
    }

    return imagePaths;
}

async function urls() {
    const filePath = path.join(__dirname, 'database', 'q_asian.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const imageUrls = [];

    /*data.videos.forEach((e) => {
        e.thumbs.forEach((i) => {
            console.log('print wr : ', i.src);
            imageUrls.push(i.src);
        });
    });*/

    /*let count = 0;
    data.videos.forEach((e) => {
        e.thumbs.forEach((i) => {
            if (count >= 5) {
                return;
            }
            console.log('print wr : ', i.src);
            imageUrls.push(i.src);
            count++;
        });
    });*/

    const limit = 2000;
    let count = 1000;

    data.videos.forEach((e) => {
        if (count >= limit) {
            return;
        }
        e.thumbs.forEach((i) => {
            if (count >= limit) {
                return;
            }
            console.log('print wr : ', i.src);
            imageUrls.push(i.src);
            count++;
        });
    });

    console.log(`Processed ${count} files out of 15000.`)

    return imageUrls;
}

async function uploadImagesToMongoDB(imagePaths) {
    const uri = process.env.DB_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('zx');
        const collection = database.collection('images');

        for (const imagePath of imagePaths) {
            console.log(`Uploading ${imagePath} to MongoDB...`);
            const imageData = fs.readFileSync(imagePath);
            const imageDocument = {
                _id: new ObjectId(),
                data: imageData,
                fileName: path.basename(imagePath),
            };

            await collection.insertOne(imageDocument);
            console.log(`Uploaded ${imagePath} to MongoDB.`);
        }
    } finally {
        await client.close();
    }
}

const directory = './images';

urls().then((imageUrls) => {
    return downloadImages(imageUrls, directory);
}).then((imagePaths) => {
    return uploadImagesToMongoDB(imagePaths);
}).then(() => {
    console.log('All images downloaded and uploaded to MongoDB.');
}).catch((error) => {
    console.error('Error:', error);
});
