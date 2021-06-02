const Volunteers = require("../models/volunteers");

exports.addToVolunters = (req, res) => {
    const {name,description,category}=req.body
  let newImage = new Volunteers({
    img: req.file.path,
    name,
    description,
    category
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
    .sort({ name: 1})
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
}

exports.deleteVolunteer=(req,res)=>{
    Volunteers.findOneAndRemove(req.params.id, err => {
        if (err) return next(err);
        res.send("Deleted successfully!");
    });
}