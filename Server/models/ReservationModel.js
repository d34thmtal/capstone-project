const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    guestName: {
        type: String,
        required: true
    },
    guestLastName: {
        type: String,
        required: true
    },
    guestMail: {
        type: String,
        required: true
    },
    guestPhone: {
        type: Number,
        required: true
    },
    arrivalDate: {
        type: String,
        required: true
    },
    departureDate: {
        type: String,
        required: true
    },
    guestsNumber: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

const ReservationModel = mongoose.model('reservation', ReservationSchema);

module.exports = ReservationModel;