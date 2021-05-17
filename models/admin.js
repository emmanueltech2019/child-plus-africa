const {model,Schema} =require('mongoose')


const adminSchema =new Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'admin',
    }
})

module.exports=model('admin',adminSchema)