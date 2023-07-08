const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: false
    },
    guestName: {
        type: String,
        required: false
    },
    guestLastName: {
        type: String,
        required: false
    },
    guestMail: {
        type: String,
        required: false
    },
    guestPhone: {
        type: Number,
        required: false
    },
    arrivalDate: {
        type: String,
        required: false
    },
    departureDate: {
        type: String,
        required: false
    },
    guestsNumber: {
        type: Number,
        required: false
    },
    TotalPrice: {
        type: Number,
        required: false
    }
});

const ReservationModel = mongoose.model('reservation', ReservationSchema);

module.exports = ReservationModel;