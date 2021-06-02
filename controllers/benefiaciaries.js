const Beneficiaries = require("../models/benefiaciaries");

exports.addToBeneficiaries = (req, res) => {
    const {name,description,category}=req.body
  let newImage = new Beneficiaries({
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


exports.allBeneficiaries=(req,res)=>{
    Beneficiaries.find()
    .sort({ name:1 })
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
        
    });
}