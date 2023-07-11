const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

//collegamento file.env
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });
// const upload = require('../Server/middleware/UpLoadImg')


// Middlewares start
app.use(cors());
app.use(express.json());


// Endpoints
const UserEndPoints = require('../Server/endpoints/UserOpEndPoint');
const PropertyEndPoints = require('../Server/endpoints/PropertyEndPoint');
const ReservationEndPoint = require('../Server/endpoints/ReservationEndPoint')
app.use(UserEndPoints);
app.use(PropertyEndPoints);
app.use(ReservationEndPoint);
// Middlewares end


// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads/',
//         //format: async (req, file) => 'png', // supports promises as well
//         public_id: (req, file) => file.originalname,
//     },
// });




mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(response => {
        console.log("DB Connected...");
        app.listen(port, async () => console.log("Server listening on port " + port))
    }).catch(err => console.log(err)) 