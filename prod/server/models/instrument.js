//Model for Instrument object
const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const InstrumentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//const Instrument = model("Instruments", InstrumentSchema, "instrument");
//module.exports = Instrument;

exports.Instrument = mongoose.model(
  "Instruments",
  InstrumentSchema,
  "instrument"
);
