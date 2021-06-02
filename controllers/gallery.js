const Gallery = require("../models/gallery");

exports.addToGallery = (req, res) => {
    const {name,description,category}=req.body
  let newImage = new Gallery({
    img: req.file.path,
    category,
    name,
    description
  });

  newImage
    .save()
    .then((result) => {
      res.status(201).json({
        message: "successfully added to gallary",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "an error occured",
      });
    });
};


exports.allGallery=(req,res)=>{
    Gallery.find()
    .sort({ date: "descending" })
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
        
    });
}