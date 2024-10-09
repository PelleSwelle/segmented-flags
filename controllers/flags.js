const Flag = require('../models/flag')

const getAllFlags = async (req, res) => {
  const allFlags = await Flag.find({});
  return allFlags;
};

const newFlag = async (req, res, next) => {
  const duplicate = await Flag.findOne({ countryName: req.body.countryName})

  if (!duplicate) {
    // create new flag object using the Flag model and req.body
    const newFlag = new Flag({
      countryName:        req.body.countryName,
      officialStateName:  req.body.officialStateName,
      flagName:           req.body.flagName,
      image:              req.body.image,
      thumbnail:          req.body.thumbnail,
      pieces:             req.body.pieces,
      continent:          req.body.continent,
      dimensions:         req.body.dimensions,
      UNMember:           req.body.UNMember,
      foundedYear:        req.body.foundedYear,
    })
  
    // save object to database
    newFlag.save().then((err, data) => {
      if (err) {
        return res.json({Error: err});
      } 
      return res.json(data);
    })
  } else {
      return res.json({message: 'Flag already exists ' + duplicate})
  }
};

const deleteAllFlags = (req, res, next) => {
  res.json({message: "DELETE all flags"});
};

const getOneFlag = (req, res, next) => {
  res.json({message: "GET 1 flag"});
};

const newComment = (req, res, next) => {
  res.json({message: "POST 1 flag comment"});
};

const deleteOneFlag = (req, res, next) => {
  res.json({message: "DELETE 1 flag"});
};

module.exports = {
  getAllFlags, 
  newFlag,
  deleteAllFlags,
  getOneFlag,
  newComment,
  deleteOneFlag
};
