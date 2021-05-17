const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
          type: Date,
          default: Date.now,
    },
    message: {
          type: String,
          trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Contact", contactSchema);
