const express = require('express');
const router = express.Router();

const ReservationModel = require('../models/ReservationModel')

router.get('/reservation', async (req, res, next) => {
    res.status(200).json(await ReservationModel.find());
})

router.post('/reservation', async (req, res, next) => {
    res.status(201).json(
        await (new ReservationModel(req.body)).save()
    )
})

// router.post('/reservation', async (req, res) => {
//     const { propertyName, guestName, guestLastName, guestMail, guestPhone, arrivalDate, departureDate, guestsNumber, totalPrice } = req.body;
//     try {
//         const mailUser = await ReservationModel.findOne({ guestMail })
//         if (mailUser) {
//             return res.json({ error: 'Mail already exists' })
//         }
//         const phoneUser = await ReservationModel.findOne({ guestPhone })
//         if (phoneUser) {
//             return res.json({ error: 'Phone already exists' })
//         }
//         const startDates = await ReservationModel.findOne({ arrivalDate })
//         if (startDates) {
//             return res.json({ error: 'startDates already exists' })
//         }
//         const endDates = await ReservationModel.findOne({ departureDate })
//         if (endDates) {
//             return res.json({ error: 'endDates already exists' })
//         }
//         await ReservationModel.create({
//             propertyName,
//             guestName,
//             guestLastName,
//             guestMail,
//             guestPhone,
//             arrivalDate,
//             departureDate,
//             guestsNumber,
//             totalPrice,
//         });
//         res.status(201).json({ status: 'Reservation created' });
//     } catch (error) {
//         res.send({ status: "error" })
//     }
// })


module.exports = router;