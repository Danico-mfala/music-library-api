const handleAPIError = require("~root/utils/handleAPIError");
const removeArtist = require("~root/actions/Artists/removeArtistById");

const deleteArtist = async (req, res) => {
  const { id } = req.params;

  try {
    const { artistId } = await removeArtist({ id });
    res.status(200).send({
      artistId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteArtist;
