const Post = require("../models/Posts");

exports.createPost = (req, res, next) => {

    console.log(req.userId)
    const postData = req.body;
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
        title: postData.title,
        seen: 0,
        userId: postData.userId

    });

    if (req.file) {
        post.imageUrl = url + "/images/" + req.file.filename
    }

    if (req.file) {
        post.body = postData.body
    }

    post
        .save()
        .then(() => {
            res.status(201).json({
                message: "Post saved successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};


exports.getAllpost = (req, res, next) => {
    Post.findAll()
        .then((posts) => {
            res.status(200).json(posts);

        })
        .catch((error) => {
            res.status(400).json(error);
        });
};