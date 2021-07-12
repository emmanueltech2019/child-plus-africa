const express = require("express");
require("dotenv").config();
const router = express.Router();
const Post = require("../models/post");
const Comment = require("../models/comments");

// Getting All Post
// exports.getPosts=(req, res) => {
//   Post.find({},{date:-1}, (err, posts) => {
//     if (err) {
//       res.status(404).send("Post not found");
//       return;
//     }
//     res.status(201).send(posts);
//   });
// };
exports.getPosts = (req, res) => {
  res.status(200).json({
    message:"found",
    post:res.paginatedResults
  })
  // Post.find({})
  //   .sort({ date: "descending" })
  //   .then((posts) => {
  //     res.status(201).send(posts);
  //   })
  //   .catch((err) => {
  //     if (err) {
  //       res.status(404).send("Post not found");
  //       return;
  //     }
  //   });
};
// Adding a New Post
exports.addPost = (req, res) => {
  console.log(req.file);
  Post.create(
    {
      author: req.body.author,
      title: req.body.title,
      post: req.body.post,
      image: req.file.path,
      description: req.body.description,
    },
    (err, post) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(post);
    }
  );
};

// Getting a single Post with it's Comment

exports.singlePost = (req, res, next) => {
  Post.findById({ _id: req.params.id })
    .populate({ path: "comments", model: Comment })
    .exec((err, post) => {
      if (err) return res.status(505).send(err);

      res.send(post);
    });
};

// Adding A New Comment to A single Post
exports.addCommentToPost = (req, res) => {
  Post.findOne({ _id: req.params.id }).then((post) => {
    let comment = new Comment({
      comment: req.body.comment,
      name: req.body.name,
      email: req.body.email,
    });
    post.comments.push(comment);
    comment.save((error) => {
      if (error) return res.send(error);
    });
    post.save((error, post) => {
      if (error) return res.send(error);
      res.send(post);
    });
  });
};

// Adding or Removing A Like to A single Post
exports.reactToPost = (req, res) => {
  Post.findOne({ _id: req.params.id }).then((post) => {
    if (req.body.like_type == "increment") {
      post.likes_count += 1;
    }
    if (req.body.like_type == "decrement") {
      post.likes_count -= 1;
    }
    post.save((error, post) => {
      if (error) return res.send(error);
      res.send(post);
    });
  });
};

exports.editPost = (req, res) => {
  const { author, title, post, image, description } = req.body;
  Post.findOneAndUpdate(
    { _id: req.params.id },
    { author, title, post, image, description },
    (err,post) => {
      if(err){
        return res.status(400).json({
          message:'post not updated'
        })
      }
      if(post){
        return res.status(200).json({
          message:'post updated successfully'
        })
      }
      else{
        return res.status(400).json({
          message:'unknown error occured'
        })
      }
    }
  );
};
// Getting a  Post
// router.get("/post/:id", (req, res, next) => {
//   Post.findOne({ _id: req.params.id }).then(post => {
//     res.send(post);
//   });
// });

//Deleting a post
// router.delete("/users/delete/:id", (req, res) => {
//   Post.findOneAndRemove(req.params.id, err => {
//     if (err) return next(err);
//     res.send("Deleted successfully!");
//   });
// });

// router.get("/comment/:id", (req, res) => {
//   Comment.findOne({ _id: req.params.id }).then(comment => {
//     res.send(comment.info.count());
//   });
// });

// router.get("/amount/:id", (req, res, next) => {
//   Post.findById({ _id: req.params.id })
//     .populate({ path: "comments", model: Comment })
//     .exec((err, post) => {
//       if (err) return res.status(505).send(err);

//       res.send(post);
//     });
// });
// module.exports = router;
