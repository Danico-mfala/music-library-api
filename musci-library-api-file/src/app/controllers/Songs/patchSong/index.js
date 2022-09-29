const handleAPIError = require("~root/utils/handleAPIError");
const modifySong = require("~root/actions/Songs/modifySong");

const patchSong = async (req, res) => {
  const { name, albumId, artistId } = req.body;
  const { id } = req.params;

  try {
    const { song } = await modifySong({ id, name, albumId, artistId });
    res.status(201).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchSong;
