const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');


// Models
const PropertyModel = require('../models/PropertyModel')

router.get('/property', async (req, res, next) => {
    res.status(200).json(await PropertyModel.find());
})

router.get('/property/:id', async (req, res, next) => {
    try {
        res.status(200).json(
            await PropertyModel.findById(
                req.params.id
            )
        );
    } catch (err) {
        next();
    }
})


router.post('/property', async (req, res, next) => {
    res.status(201).json(
        await (new PropertyModel(req.body)).save()
    )
})

module.exports = router;