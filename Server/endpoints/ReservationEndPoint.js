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


module.exports = router;