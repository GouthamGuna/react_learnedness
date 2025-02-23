import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

    for (const [index, url] of urls.entries()) {
        const fileName = path.basename(url);
        const savePath = path.join(directory, index+"_"+fileName);
        try {
            await downloadImage(url, savePath);
            console.log(`Downloaded ${index + 1}/${urls.length}: ${url}`);
        } catch (error) {
            console.error(`Failed to download ${url}: ${error.message}`);
        }
    }
}

async function urls() {
    const filePath = path.join(__dirname, 'database', 'q_asian.json');
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

const directory = './images';

urls().then((imageUrls) => {
    return downloadImages(imageUrls, directory);
}).then(() => {
    console.log('All images downloaded.');
}).catch((error) => {
    console.error('Error downloading images:', error);
});
