const mongoose = require('mongoose');

const FlagSchema = new mongoose.Schema({
  countryName: {type:String, required: true},
  officialStateName: String,
  flagName: String,
  image: String,
  thumbnail: String,
  pieces: [{piece: String, layer: Number }],
  continent: String,
  dimensions: [{width: Number, height: Number}],
  UNMember: Boolean,
  foundedYear: Number
})

// convert schema to model
const Flag = mongoose.model('Flag', FlagSchema);
module.exports = Flag