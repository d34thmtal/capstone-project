const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');


// Models
const UserOpModel = require('../models/UserOpModel')

router.get('/users', async (req, res, next) => {
    res.status(200).json(await UserOpModel.find());
})

router.get('/users/:id', async (req, res, next) => {
    try {
        res.status(200).json(
            await UserOpModel.findById(
                req.params.id
            )
        );
    } catch (err) {
        next();
    }
})


router.post('/users', async (req, res, next) => {
    res.status(201).json(
        await (new UserOpModel(req.body)).save()
    )
})

module.exports = router;