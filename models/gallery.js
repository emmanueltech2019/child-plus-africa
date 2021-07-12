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
    uppercase: true
  },
  description: {
    type: String,
  },
  images:[
    {
      type: String,
    }
  ]
});

const Gallery = mongoose.model("gallery", GallerySchema);

module.exports = Gallery;
