const updateAlbum = require("./queries/updateAlbum");

const modifyAlbum = async ({ id, name, year, artistId }) => {
  const album = await updateAlbum({ id, name, year, artistId });
  return { album };
};

module.exports = modifyAlbum;
