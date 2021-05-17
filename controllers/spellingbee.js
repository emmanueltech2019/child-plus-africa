const SpellingBee = require('../models/spellingbee');



exports.joinBee=(req,res)=>{
    const {email,data}=req.body
    SpellingBee.findOne({email},(err,participant)=>{
        if(err){
            res.status(400).json({
                message:'an error occured'
            })
        }
        if(participant){

            res.status(200).json({
                message:'thanks'
            })
        }
        if(!participant){
            let newParticiant = new SpellingBee({
                email
            })

            newParticiant.save()
            .then(()=>{
                res.status(201).json({
                    message:'thanks'
                })
            })
        }
    })
}
exports.submitData=(req,res)=>{
    const {email,data}=req.body
    SpellingBee.findOne({email},(err,participant)=>{
        if(err){
            res.status(400).json({
                message:'an error occured'
            })
        }
        if(participant){
            participant.data=data
            participant.save()
            .then(()=>{
                res.status(200).json({
                    message:'updated successfully'
                })
            })
        }
    })
}



exports.allParticipants=(req,res)=>{
    SpellingBee.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
        
    });
}