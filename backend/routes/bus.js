const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Bus = require("../models/Buses");

router.post("/availablebuses", async (req, res) => {
  try {
    const { start, end, stop } = req.body;

    // Use findAll with a where clause to find buses that match the 'end' condition
    const buses = await Bus.find({ end: end });

    if (!buses || buses.length === 0) {
      return res.json({ message: "No bus available." });
    }

    res.json(buses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/createbuses", async (req, res) => {
  try {
    const {
      busnumber,
      start,
      end,
      stop,
      geolocation: { latitude, longitude },
    } = req.body;

    let bus = await Bus.findOneAndUpdate(
      { busnumber: busnumber },
      {
        busnumber: busnumber,
        start: start,
        end: end,
        stop: stop,
        geolocation: {
          latitude,
          longitude,
        },
      },
      { upsert: true, new: true }
    );
    res.json({ message: "BUS ADDED" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
