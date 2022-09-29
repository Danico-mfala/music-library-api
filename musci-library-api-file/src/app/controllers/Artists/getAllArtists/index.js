const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllArtists = require("~root/actions/Artists/fecthAllArtists");

const getAllArtists = async (req, res) => {
  try {
    const { allArtists } = await fetchAllArtists();
    res.status(200).send({
      allArtists
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllArtists;
