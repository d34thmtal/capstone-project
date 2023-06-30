const mongoose = require('mongoose');

// Mongose Schema
const UserOpSchema = new mongoose.Schema(
    {
        name: String,
        lastname: String,
        email: { type: String, required: true },
        telephone: { type: Number, required: true },
        password: { type: String, required: true },
        img: String,
        provider: { type: String, default: 'register'},
        verified: { type: Boolean, default: false }
    }
)
// Mongoose model
const UserOpModel = mongoose.model('users', UserOpSchema)

// Export Model
module.exports = UserOpModel;