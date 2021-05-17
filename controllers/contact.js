const Contact = require('../models/contact')


exports.contactus=(req,res)=>{
    const {name,email,message,subject} =req.body
    let newContact = new Contact({
        name,
        email,
        message,
        subject
    })

    newContact.save((err,contact)=>{
        if(err){
            console.log(err)
            return res.status(400).json({
                message:'an error occured'
            })
        }
        else{
            return res.status(200).json({
                message:'we will get back to you soon'
            })

        }
    })
}

exports.allContact=(req,res)=>{
    Contact.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
}