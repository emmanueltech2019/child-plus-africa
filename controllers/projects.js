const Project = require("../models/projects");

exports.addToProject = (req, res) => {
    const {name,description,category}=req.body
  let newImage = new Project({
    img: req.file.path,
    category,
    name,
    description
  });

  newImage
    .save()
    .then((result) => {
      res.status(201).json({
        message: "successfully added to projects",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "an error occured",
      });
    });
};


exports.allProject=(req,res)=>{
    Project.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
        
    });
}