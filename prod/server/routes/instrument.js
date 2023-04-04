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

//get instrument by ID
router.get(`/:id`, async (req, res) => {
  const instrument = await Instrument.findById(req.params.id);
  if (!instrument) {
    res.status(500).json({ message: "Instrument with the given ID not found" });
  }
  res.status(200).send(instrument);
});

//POST/CREATE a new instrument
router.post("/", async (req, res) => {
  //name type year company price
  let instrument = new Instrument({
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    company: req.body.company,
    price: req.body.price,
  });

  instrument = await instrument.save();

  if (!instrument) {
    return res.status(400).send("the instrument cannot be created");
  }
  res.send(instrument);
});

//DELETE instrument by ID
router.delete("/:id", (req, res) => {
  Instrument.findByIdAndRemove(req.params.id)
    .then((instrument) => {
      if (instrument) {
        return res
          .status(200)
          .json({ success: true, message: "the instrument has been deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "instrument not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;
