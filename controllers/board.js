const Board = require("../models/board");

exports.addToBoard = (req, res) => {
    const {name,description}=req.body
  let newImage = new Board({
    img: req.file.path,
    name,
    description
  });

  newImage
    .save()
    .then((result) => {
      res.status(201).json({
        message: "successfully added to baords ",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "an error occured",
      });
    });
};


exports.allBoard=(req,res)=>{
    Board.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
}