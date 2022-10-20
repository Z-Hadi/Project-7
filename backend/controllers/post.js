const Post = require("../models/Posts");
const User = require("../models/Users");

exports.createPost = (req, res, next) => {
  const postData = req.body;
  const userId = parseInt(postData.userId);
  const url = req.protocol + "://" + req.get("host");
  const post = {
    title: postData.title,
    userId: userId,
  };

  if (req.file) {
    post.imageUrl = url + "/images/" + req.file.filename;
  } else {
    post.body = postData.body;
  }

 const newPost= new Post(post)
    newPost.save() // check how to include
    .then((post) => {
        // res.status(201).json(post);

      User.findOne( {
        where: { userId }
      })
      
        .then((user) => {
            console.log(user.dataValues)
          post.dataValues.User = user.dataValues;
          res.status(201).json(post);
        })
        .catch((error) => {
          res.status(405).json(error);
        });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

exports.getAllpost = (req, res, next) => {
  Post.findAll({
    include: { model: User, attributes: ["firstName", "lastName"] },
  })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
