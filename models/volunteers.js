const {Schema,model} = require("mongoose");

const VolunteersSchema = new Schema({
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
});

const Volunteers = model("volunteers", VolunteersSchema);

module.exports = Volunteers;
