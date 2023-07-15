const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  maximumGuest: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  features: [
    {
      type: String,
      required: true
    }
  ],
  pricePerNight: {
    type: Number,
    required: true
  },
  coverImageUrl: {
    type: String,
    required: true
  },
  gpsPosition: {
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    }
  }
});

const PropertyModel = mongoose.model('property', PropertySchema);

module.exports = PropertyModel;
