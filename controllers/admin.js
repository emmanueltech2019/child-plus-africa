const Admin = require('../models/admin')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const { APP_SECRET } = process.env;

exports.register=(req,res)=>{
    const {fullname,email,password} =req.body
    Admin.findOne({ email }, (err, admin) => {
        if (err) {
          res.status(400).json({
            message: "an error occured",
            error: err,
          });
        }
        if (admin) {
          res.status(403).json({
            message: `email already exist`,
          });
        }
        if (!admin) {
          const hash = bcrypt.hashSync(password, 10);
          const newAdmin = new Admin({
            fullname,
            email,
            password: hash,
            role: "admin",
          });
          newAdmin
            .save()
            .then(() => {
              res.status(201).json({
                message: "account created successfully",
              });
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      });
}


exports.login=(req,res)=>{
    const { email, password } = req.body;
  Admin.findOne({ email }, (err, admin) => {
    if (err) {
      return res.status(400).json({
        message: "an error occured ",
      });
    }
    if (!admin) {
      return res.status(404).json({
        message: "account does not exist",
      });
    }
    if (admin) {
      let isPasswordValid = bcrypt.compareSync(password, admin.password);
      if (isPasswordValid) {
        let token = jwt.sign(
          {
            // exp: Math.floor  (Date.now() / 1000) + 60 * 60,
            data: { id: admin._id, role: admin.role },
          },
          APP_SECRET
        );
        res.status(200).json({
          token,
          message: "login successful",
          admin: {
            _id: admin._id,
            role: admin.role,
            fullname: admin.fullname
          },
        });
      } else {
        res.status(400).json({
          message: "invalid password",
        });
      }
    }
  });
}