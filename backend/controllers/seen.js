const Seen = require("../models/Seen");

exports.createSeen = (req, res, next) => {
  const data = req.body;
  Seen.findAll({ where: { userId: data.userId, postId: data.postId } }).then(
    (doc) => {
      if (doc.length) {
        res.status(200).send()
      }
      console.log(data)
      Seen.create({ userId: data.userId, postId: data.postId }).then(() => {
        res.status(200).send()
      })  .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
    }
  )  .catch((error) => {
    console.log(error);
    res.status(500).json(error);
});
};



exports.hasSeen = (req, res, next) => {
 
    Seen.findAll({ where: { userId: req.params.userId, postId: req.params.postId } }).then(
      (doc) => {
        
        res.status(200).json(!!doc.length)
        
      }
    )  .catch((error) => {
      console.log(error);
      res.status(500).json(error);
  });
  };