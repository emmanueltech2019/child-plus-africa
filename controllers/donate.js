const Donate = require("../models/donate");

exports.addToDonation = (req, res) => {
    const {fullname,email,phoneNumber,amount}=req.body
  let newDonate = new Donate({
    fullname,
    email,
    phoneNumber,
    amount,
  });

  newDonate
    .save()
    .then((result) => {
      res.status(201).json({
        message: "thanks for donating",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "an error occured",
      });
    });
};


exports.allDonations=(req,res)=>{
    Donate.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
        
    });
}