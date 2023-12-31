// Upload Foto
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
// require('dotenv').config();

// Upload File nel Cloud tramite multer cloudinary
// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        // allowed_formats: ["wepb", "jpeg"],
        public_id: (req, file) => file.originalname,
        quality: 'auto:low',
    },
});


const upload = multer({ storage: storage });
// Fine Upload File nel Cloud tramite multer cloudinary

// Export 
module.exports = upload;