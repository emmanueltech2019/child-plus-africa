const {Schema,model} =require('mongoose')



const beneficiariesSchema =new Schema({
    img: {
        type: String,
        trim: true,
      },
      date: { type: Date, default: Date.now },
      category: {
        type: String,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
})


module.exports=model('beneficiaries',beneficiariesSchema)