const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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
  link: {
    type: String,
  },
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
