const handleAPIError = require("~root/utils/handleAPIError");
const modifyArtist = require("~root/actions/Artists/modifyArtist");

const patchArtist = async (req, res) => {
  const { name, genre } = req.body;
  const { id } = req.params;

  try {
    const { artist } = await modifyArtist({ id, name, genre });
    res.status(201).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchArtist;
