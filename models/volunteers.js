const {Schema,model} = require("mongoose");

const VolunteersSchema = new Schema({
  img: {
    type: String,
    trim: true,
  },
  date: { type: Date, default: Date.now },
  category: {
    type: String,
    default:'volunteer'
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Volunteers = model("volunteers", VolunteersSchema);

module.exports = Volunteers;
