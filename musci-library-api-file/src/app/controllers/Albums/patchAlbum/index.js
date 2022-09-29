const handleAPIError = require("~root/utils/handleAPIError");
const modifyAlbum = require("~root/actions/Albums/modifyAlbum");

const patchAlbum = async (req, res) => {
  const { name, year, artistId } = req.body;
  const { id } = req.params;

  try {
    const { album } = await modifyAlbum({ id, name, year, artistId });
    res.status(201).send({
      album
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchAlbum;
