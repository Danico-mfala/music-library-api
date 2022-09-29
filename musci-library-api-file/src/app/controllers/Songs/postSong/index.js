const handleAPIError = require("~root/utils/handleAPIError");
const createSong = require("~root/actions/Songs/createSong");

const postSong = async (req, res) => {
  const { name, albumId, artistId } = req.body;

  try {
    const { songId } = await createSong({ name, albumId, artistId });

    res.status(201).send({
      songId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postSong;
