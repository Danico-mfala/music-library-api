const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllAlbums = require("~root/actions/Albums/fetchAllAlbums");

const getAllAlbums = async (req, res) => {
  // const {id} = req.params;

  try {
    const { allAlbums } = await fetchAllAlbums();
    res.status(200).send({
      allAlbums
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllAlbums;
