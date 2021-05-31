const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { DB, PORT } = process.env;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Successfully Connected To ${DB}`);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/admin',require('./routes/admin'))
app.use('/api/v1/blog',require('./routes/post'))
app.use('/api/v1/contact',require('./routes/contact'))
app.use('/api/v1/image',require('./routes/gallery'))
app.use('/api/v1/bene',require('./routes/benefiaciaries'))
app.use('/api/v1/board',require('./routes/board'))
app.use('/api/v1/project',require('./routes/projects'))
app.use('/api/v1/donate',require('./routes/donate'))
app.use('/api/v1/bee',require('./routes/spellingbee'))
app.use('/api/v1/volunteers',require('./routes/volunteers'))


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'emmanueltech2019@gmail.com',
//     pass: 'surelysecuredemmanuellucky2020password'
//   }
// });

// var mailOptions = {
//   from: 'emmanueltech2019@gmail.com',
//   to: 'emmanueltech2019@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
