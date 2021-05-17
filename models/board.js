const {Schema,model} = require("mongoose");

const BoardSchema = new Schema({
  img: {
    type: String,
    trim: true,
  },
  date: { type: Date, default: Date.now },
  category: {
    type: String,
    default:'beneficiaries'
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Board = model("board", BoardSchema);

module.exports = Board;
