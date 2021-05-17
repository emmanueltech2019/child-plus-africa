const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpellingBeeSchema = new Schema({
  email:{
      type:String,
      required:true,
      unique:true
  },
  data:{
      type:Object
  }
});

const SpellingBee = mongoose.model("spellingbee", SpellingBeeSchema);

module.exports = SpellingBee;
