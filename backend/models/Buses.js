const mongoose = require("mongoose");
const { Schema } = mongoose;

const BusSchema = new Schema({
  busnumber: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
    unique: true,
  },
  stop: {
    type: Array,
  },
  geolocation: {
    latitude: Number,
    longitude: Number,
  },
});
const Bus = mongoose.model("bus", BusSchema);
module.exports = Bus;
