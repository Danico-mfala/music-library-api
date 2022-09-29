const handleAPIError = require("~root/utils/handleAPIError");
const createAlbum = require("~root/actions/Albums/createAlbum");

const postAlbum = async (req, res) => {
  const { name, year, artistId } = req.body;

  try {
    const { albumId } = await createAlbum({ name, year, artistId });

    res.status(201).send({
      albumId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postAlbum;
