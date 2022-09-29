const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

// Artists
const postArtist = require("./controllers/Artists/postArtist");
const getArtist = require("./controllers/Artists/getArtist");
const getAllArtists = require("./controllers/Artists/getAllArtists");
const deleteArtist = require("./controllers/Artists/removeArtist");
const patchArtist = require("./controllers/Artists/patchArtist");

// Albums
const postAlbum = require("./controllers/Albums/postAlbum");
const patchAlbum = require("./controllers/Albums/patchAlbum");
const getAllAlbums = require("./controllers/Albums/getAlbums");
const getAlbum = require("./controllers/Albums/getAlbum");
const deleteAlbum = require("./controllers/Albums/removeAlbum");

// Songs
const postSong = require("./controllers/Songs/postSong");
const getAllSongs = require("./controllers/Songs/getAllSongs");
const getSong = require("./controllers/Songs/getSong");
const patchSong = require("./controllers/Songs/patchSong");
const deleteSong = require("./controllers/Songs/removeSong");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// Artists
router.post("/artists", postArtist);

router.get("/artists", getAllArtists);

router.get("/artists/:id", getArtist);

router.delete("/artists/:id", deleteArtist);

router.patch("/artist/:id", patchArtist);

// Albums
router.post("/albums", postAlbum);

router.get("/albums", getAllAlbums);

router.get("/albums/:id", getAlbum);

router.delete("/albums/:id", deleteAlbum);

router.patch("/albums/:id", patchAlbum);

// Songs

router.post("/songs", postSong);

router.get("/songs", getAllSongs);

router.get("/songs/:id", getSong);

router.delete("/songs/:id", deleteSong);

router.patch("/songs/:id", patchSong);

module.exports = router;
