//this is the route for instruments to support Create, Read and Delete operations

const { Instrument } = require("../models/instrument");
const express = require("express");
const router = express.Router();

//get all instruments
router.get(`/`, async (req, res) => {
  const instrumentList = await Instrument.find();
  if (!instrumentList) {
    res.status(500).json({ success: false });
  }
  res.send(instrumentList);
});

//TODO: get one, create, delete

module.exports = router;
