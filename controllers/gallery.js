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
        message: "successfully crated new gallary",
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
exports.singleGallery=(req,res)=>{
    Gallery.findOne({_id:req.params.id})
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
}

exports.addToSingleGallery=(req,res)=>{
  Gallery.findOne({_id:req.params.id})
  .then((gallery) => {
    if (req.files.length > 0) {
      for (let i = 0; i < req.files.length; i++) {
        const image = req.files[i].path
        gallery.images.push(image)
      }
    }
    gallery.save()
    .then(()=>{
      res.send("added successfully")
    })
  }).catch((err) => {
    
  });
}

exports.editSingleGalleryImage=(req,res)=>{
  const {index,id}=req.body
  Gallery.findOne({_id:id})
  .then((gallery) => {
    if (req.files.length > 0) {
      let newList=[]
      for (let i = 0; i < req.files.length; i++) {
        const image = req.files[i].path
        newList = [
          ...gallery.images,
          gallery[index]=image
        ]
      }
      gallery.images=newList
    }
    gallery.save()
    .then(()=>{
      res.send("added successfully")
    })
  })

}