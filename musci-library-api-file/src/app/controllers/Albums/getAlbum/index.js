const handleAPIError = require("~root/utils/handleAPIError");
const fetchAlbum = require("~root/actions/Albums/fetchAlbum");

const getAlbum = async (req, res) => {
  const { id } = req.params;

  try {
    const { albumId } = await fetchAlbum({ id });
    res.status(200).send({
      albumId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAlbum;
