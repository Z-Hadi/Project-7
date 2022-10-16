const Post = require("../models/Posts");
const Users = require("../models/Users");
const User = require("../models/Users");

exports.createPost = (req, res, next) => {

    const postData = req.body;
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
        title: postData.title,
        userId: parseInt(postData.userId),
    });

    if (req.file) {
        post.imageUrl = url + "/images/" + req.file.filename;
    } else {
        post.body = postData.body;
    }

    post
        .save()
        .then((post) => {
            res.status(201).json(post); // IF this does not work we need to change it to  res.status(201).json(post.toJSON());
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

exports.getAllpost = (req, res, next) => {
    Post.findAll({ include: User
    //    {model: User,
    //     attributes:[ 'firstName','lasName']}
        
    
    
    
    })
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};