const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllSongs = require("~root/actions/Songs/fetchAllSongs");

const getAllSongs = async (req, res) => {
  try {
    const { allSongs } = await fetchAllSongs();
    res.status(200).send({
      allSongs
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllSongs;
