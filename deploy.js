require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

// Configure AWS
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const bucketName = process.env.AWS_BUCKET_NAME;
const outDir = path.join(__dirname, 'out');

async function uploadDir(dirPath) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await uploadDir(filePath);
        } else {
            const fileContent = fs.readFileSync(filePath);
            const relativePath = path.relative(outDir, filePath);
            
            await s3.putObject({
                Bucket: bucketName,
                Key: relativePath,
                Body: fileContent,
                ContentType: mime.lookup(filePath) || 'application/octet-stream'
            }).promise();

            console.log(`Uploaded: ${relativePath}`);
        }
    }
}

async function deploy() {
    try {
        await uploadDir(outDir);
        console.log('Deployment complete!');
    } catch (err) {
        console.error('Deployment failed:', err);
    }
}

deploy();
