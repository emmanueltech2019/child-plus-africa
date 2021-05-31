const Volunteers = require("../models/volunteers");

exports.addToVolunters = (req, res) => {
    const {name,description}=req.body
  let newImage = new Volunteers({
    img: req.file.path,
    name,
    description
  });

  newImage
    .save()
    .then((result) => {
      res.status(201).json({
        message: "successfully added to volunteers ",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "an error occured",
      });
    });
};


exports.allVolunteers=(req,res)=>{
    Volunteers.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
}