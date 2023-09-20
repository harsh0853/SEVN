const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Bus = require("../models/Buses");
const Driver = require("../models/Drivers");

router.post("/availablebuses", fetchuser, async (req, res) => {
  try {
    const { start, end, stop } = req.body;

    // Find all buses matching the 'end' condition
    const allBuses = await Bus.find({ end: end });

    if (!allBuses || allBuses.length === 0) {
      return res.json({ message: "No bus available." });
    }

    // Filter the buses based on 'active' status and 'stops' array
    const filteredBuses = allBuses.filter((bus) => {
      return bus.active && (bus.stop.includes(end) || bus.end == end);
    });

    if (filteredBuses.length === 0) {
      return res.json({
        message: "No active buses available to this destination.",
      });
    }

    res.json(filteredBuses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/busdetails", fetchuser, async (req, res) => {
  try {
    const { busnumber } = req.body;

    // Search for the bus by busnumber in your MongoDB database
    const bus = await Driver.findOne({ vehicalreq: busnumber });

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // If the bus is found, send its details to the frontend
    res.json(bus);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/latlong", fetchuser, async (req, res) => {
  try {
    const { busnumber } = req.body;

    // Search for the bus by busnumber in your MongoDB database
    const bus = await Bus.findOne({ vehicalreq: busnumber });

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // If the bus is found, send its details to the frontend
    res.json(bus);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/seat", fetchuser, async (req, res) => {
  try {
    const busnumber = req.body.busnumber; // Corrected to 'busnumber'
    const bus = await Bus.findOne({ busnumber: busnumber });

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    bus.count = req.body.count;
    console.log(req.body.count);
    await bus.save();
    res.json({ messag: "SAVED" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/msg", fetchuser, async (req, res) => {
  try {
    const busnumber = req.body.busnumber; // Corrected to 'busnumber'
    const bus = await Bus.findOne({ busnumber: busnumber });

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    bus.m = req.body.m;
    //console.log(req.body.count);
    await bus.save();
    res.json({ messag: "SAVED" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/createbuses", fetchuser, async (req, res) => {
  try {
    const {
      busnumber,
      start,
      end,
      stop,
      geolocation: { latitude, longitude },
      active,
      latlong,
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
        active: active,
        latlong: latlong,
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
