const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  img: {
    type: String,
    trim: true,
  },
  date: { type: Date, default: Date.now },
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Gallery = mongoose.model("gallery", GallerySchema);

module.exports = Gallery;