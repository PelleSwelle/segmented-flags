const Flag = require('../models/flag')

const getAllFlags = async (req, res) => {
  let allFlags = await Flag.find()
  if (allFlags) {
    return res.json(allFlags)
  } else {
    return res.json({message: 'could not get all flags'});
  }
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
    let success = await newFlag.save()
    if (!success) {
      return res.json({Error: res.Error});
    } else {
      return res.json(newFlag);
    }
  } else {
      return res.json({message: 'Flag already exists ' + duplicate})
  }
};

const deleteAllFlags = async (req, res, next) => {
  let success = await Flag.deleteMany({})
  if (success) {
    return res.json({message: 'complete delete successful'})
  } else {
    return res.json({message: 'complete delete failed'})
  }
};

const getOneFlag = async (req, res, next) => {
  let countryName = req.params.countryName;

  let flag = Flag.findOne({countryName: countryName})

  if (!flag) {
    return res.json({message: 'could not find flag'})
  } else {
    return res.json(flag)
  }
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
