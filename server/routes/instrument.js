//this is the route for instruments to support Create, Read and Delete operations
const { Instrument } = require("../models/instrument");
const express = require("express");
const router = express.Router();
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "info" || "error";

//get all instruments
router.get(`/`, async (req, res) => {
  logger.info("entering get all instruments");
  const instrumentList = await Instrument.find();
  if (!instrumentList) {
    logger.error("  Error: Instrument list not found");
    res.status(500).json({ success: false });
  }
  logger.info(" Instruments found");
  res.send(instrumentList);
  logger.info("exiting get all instruments");
});

//get instrument by ID
router.get(`/:id`, async (req, res) => {
  logger.info("entering get instrument by ID");
  const instrument = await Instrument.findById(req.params.id);
  if (!instrument) {
    logger.error("  Error: Instrument not found");
    res
      .status(500)
      .json({ message: " Instrument with the given ID not found" });
  }
  logger.info("Instrument found");
  res.status(200).send(instrument);
  logger.info("exiting get instrument by ID");
});

//POST/CREATE a new instrument
router.post("/", async (req, res) => {
  logger.info("entering create instrument");
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
    logger.error("  Error: Instrument could not be created");
    return res.status(400).send("the instrument cannot be created");
  }
  res.send(instrument);
  logger.info(" Instrument created, exiting create instrument");
});

//DELETE instrument by ID
router.delete("/:id", (req, res) => {
  logger.info("entering delete instrument");
  Instrument.findByIdAndRemove(req.params.id)
    .then((instrument) => {
      if (instrument) {
        logger.info("Instrument deleted");
        return res
          .status(200)
          .json({ success: true, message: "the instrument has been deleted" });
      } else {
        logger.error("  Error: Instrument for deletion not found");
        return res
          .status(404)
          .json({ success: false, message: "instrument not found" });
      }
    })
    .catch((err) => {
      logger.error("  Error during instrument deletion");
      return res.status(400).json({ success: false, error: err });
    });
  logger.info("exiting delete instrument");
});

module.exports = router;
