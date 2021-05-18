const Project = require("../models/projects");

exports.addToProject = (req, res) => {
    const {name,description,category,link}=req.body
    let data
    if (link) {
      data={img: req.file.path,
        category,
        name,
        description,
        link
      }
      
    } else {
      data={img: req.file.path,
        category,
        name,
        description
      }
      
    }
  let newImage = new Project(data);

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