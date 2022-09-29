const handleAPIError = require("~root/utils/handleAPIError");
const fetchArtist = require("~root/actions/Artists/fetchArtist");

const getArtist = async (req, res) => {
  const { id } = req.params;

  try {
    const { artist } = await fetchArtist({ id });
    res.status(200).send({
      artist
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getArtist;
