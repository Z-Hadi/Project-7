const Post = require("../models/Posts");

exports.createPost = (req, res, next) => {
    console.log(req.body)
    console.log(req.userId)
    const postData = req.body;
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
        Title: postData.Title,
        Body: postData.Body,
        Seen: 0,
        // ImageURL: url + "/images/" + req.file.filename,

        UserID: req.auth.userId

    });

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