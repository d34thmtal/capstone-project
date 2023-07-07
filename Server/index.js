const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

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


mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(response => {
        console.log("DB Connected...");
        app.listen(port, async () => console.log("Server listening on port " + port))
    }).catch(err => console.log(err)) 