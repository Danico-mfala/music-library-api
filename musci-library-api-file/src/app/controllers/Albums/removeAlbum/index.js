const handleAPIError = require("~root/utils/handleAPIError");
const removeAlbum = require("~root/actions/Albums/removeAlbum");

const deleteAlbum = async (req, res) => {
  const { id } = req.params;

  try {
    const { albumId } = await removeAlbum({ id });
    res.status(200).send({
      albumId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteAlbum;
