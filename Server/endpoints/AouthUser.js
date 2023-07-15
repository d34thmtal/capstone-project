const express = require('express');
const routers = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserOpModel = require("../models/UserOpModel")
const jwtSecretKey = process.env.APP_JWT_SECRET_KEY;
require('dotenv').config();

routers.post('/register', async (req, res) => {

    const { name, lastname, email, telephone, password } = req.body;
    const saltRounds = await bcrypt.hash(password, 10);
    try {
        const emailExists = await UserOpModel.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists' })
        }
        const nameExists = await UserOpModel.findOne({ name });
        if (nameExists) {
            return res.status(400).json({ error: 'Name already exists' })
        }
        const lastnameExists = await UserOpModel.findOne({ lastname });
        if (lastnameExists) {
            return res.status(400).json({ error: 'Lastname already exists' })
        }
        await UserOpModel.create({
            name,
            lastname,
            email,
            telephone,
            password: saltRounds
        });
        res.send({ status: "User Registered" });
    } catch (error) {
        res.send({ error: error.message })
    }
})

routers.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const userLogin = await UserOpModel.findOne({ email });
    if (!userLogin) {
        return res.status(400).json({ error: 'Invalid Email' })
    } if (await bcrypt.compare(password, userLogin.password)) {
        const token = jwt.sign({
            id: userLogin._id,
            name: userLogin.name,
            lastname: userLogin.lastname,
            email: userLogin.email
        }, jwtSecretKey, { expiresIn: '1h' })
        if (res.status(201)) {
            return res.json({ status: "Successfully Logged", data: token })
        } else {
            return res.json({ error: "Access denied" })
        }
    }
    res.json({ staus: "error", error: "Invalid Password" })
})


module.exports = routers;