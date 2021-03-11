const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const ArtistModel = require("../models").Artist;
const SongModel = require("../models").Song;

// GET users who favorited an artist
router.get("/profile/:id", async (req, res) => {
    let artist = await ArtistModel.findByPk(req.params.id, {
      include: [{ model: UserModel, attributes: ['id', 'name'] }]
    });
    res.json({ artist });
  });

// GET ALL artists
router.get("/", async (req, res) => {
    let artists = await ArtistModel.findAll({include: SongModel});
    res.json({ artists });
  });

// CREATE A NEW artist
router.post("/", async (req, res) => {
    let artist = await ArtistModel.create(req.body);
    res.json({ artist });
  });

// UPDATE AN ARTIST
router.put("/:id", async (req, res) => {
    let artist = await ArtistModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json({ artist });
});
  
// DELETE AN ARTIST
router.delete("/:id", async (req, res) => {
    try {
      await ArtistModel.destroy({
        where: { id: req.params.id },
      });
      res.json({
        message: `Artist with id ${req.params.id} was deleted`
      });
    } catch(e) {
        console.log(e);
        res.json({
          message: `Artist with id ${req.params.id} cannot be deleted`
        });
    }
});  

//Create a new song for an artist
router.post("/:id/newsong", async (req, res) => {
  let artist = await ArtistModel.findByPk(req.params.id);
  let song = await artist.createSong(req.body);
  res.json({ artist, song });
});

module.exports = router;