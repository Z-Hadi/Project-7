const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const seenCtrl = require("../controllers/seen");


router.post("/", auth, seenCtrl.createSeen);
router.get("/:postId/:userId", auth, seenCtrl.hasSeen);

module.exports = router;