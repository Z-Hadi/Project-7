const Post = require("../models/Posts");

exports.createPost = (req, res, next) => {

    console.log(req.userId)
    const postData = req.body;
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
        Title: postData.Title,
        Seen: 0,
        UserID: postData.UserID

    });

    if (req.file) {
        post.ImageURL = url + "/images/" + req.file.filename
    }

    if (req.file) {
        post.Body = postData.Body
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