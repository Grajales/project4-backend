const express = require("express");
const router = express.Router();

// const UserModel = require("../models").User;
const CommentModel = require("../models").Comment;
// const SongModel = require("../models").Song;



// GET ALL comments
router.get("/", async (req, res) => {
    let comments = await CommentModel.findAll();
    res.json({ comments });
  });

// CREATE A NEW comment
router.post("/", async (req, res) => {
    let comment = await CommentModel.create(req.body);
    res.json({ comment });
  });



module.exports = router;