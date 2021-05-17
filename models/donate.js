const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonateSchema = new Schema({
  fullname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  amount: {
    type: String,
    trim: true,
  },
  date: { type: Date, default: Date.now },
});

const Donate = mongoose.model("Donate", DonateSchema);

module.exports = Donate;
