const handleAPIError = require("~root/utils/handleAPIError");
const removeSong = require("~root/actions/Songs/removeSong");

const deleteSong = async (req, res) => {
  const { id } = req.params;

  try {
    const { songId } = await removeSong({ id });
    res.status(200).send({
      songId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteSong;
