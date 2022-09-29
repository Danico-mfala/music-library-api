const handleAPIError = require("~root/utils/handleAPIError");
const fetchSong = require("~root/actions/Songs/fetchSong");

const getSong = async (req, res) => {
  const { id } = req.params;

  try {
    const { songId } = await fetchSong({ id });
    res.status(200).send({
      songId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getSong;
