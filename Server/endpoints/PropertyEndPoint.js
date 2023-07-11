const express = require('express');
const router = express.Router();
const upload = require('../middleware/UpLoadImg');

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


router.post('/property', upload.single('coverImageUrl'), async (req, res, next) => {
    const data = req.file ? req.file.path : '';
    try {
        const property = new PropertyModel({
            ...req.body,
            coverImageUrl: data,
        })
        await property.save();
        return res.status(201).json(property)

        // const property = await new PropertyModel(req.body).save();
        // res.status(201).json(property);
    } catch (error) {
        next(error);
    }
});

// router.post('/property', async (req, res, next) => {
//     res.status(201).json(
//         await (new PropertyModel(req.body)).save()
//     )
// })

//filtro feature

// router.get('/property/features/:features', async (request, response) => {
//     try {
//         const features = request.params.feature;
//         const queryString = request.query;

//         const foundProperties = properties.filter((property) => {
//             return property.feature === feature;
//         });

//         return response.json(foundProperties);
//     } catch (err) {
//         return response.status(500).json({ error: "features non trovata", ...err });
//     }
// });


router.get('/property/byquery', async (request, response) => {
    const { features } = request.query
    const query = {}
    if (features) {
        const featuresArray = features.split(",")
        query.$or = featuresArray.map(feature => ({ features: feature }))
    }
    try {
        const properties = await PropertyModel.find(query)
        response.status(200).send(properties)
    } catch (error) {
        response.status(500).send("Errore interno server")
    }
    // const { privatepool, jacuzzi, nearthesea, forfamilies, tennisfield } = request.query;
    // const query = {};
    // if (privatepool === "true") {
    //     query.features = { $in: ["private pool"] }
    // }
    // if (nearthesea === "true") {
    //     query.features = { $in: ["near the sea"] }
    // }
    // if (forfamilies === "true") {
    //     query.features = { $in: ["for families"] }
    // }
    // if (jacuzzi === "true") {
    //     query.features = { $in: ["jacuzzi"] }
    // }
    // if (tennisfield === "true") {
    //     query.features = { $in: ["tennis field"] }
    // }

    // try {
    //     const property = await PropertyModel.find(query)
    //     response.status(200).send({
    //         statuscode: 200,
    //         property
    //     })

    // } catch (error) {
    //     response.status(500).send("Errore interno server")
})

router.delete('/property/:id', async (request, response, next) => {
    try {
        response.status(200).json(
            await PropertyModel.findByIdAndDelete(request.params.id))
    } catch (err) {
        //res.status(400).json({error: "User ID not found"}, ...err);
        next();
    }
})


module.exports = router;