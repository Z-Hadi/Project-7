const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const postCtrl = require("../controllers/post");

router.post("/", multer, auth, postCtrl.createPost);
router.get("/", postCtrl.getAllpost);

module.exports = router;