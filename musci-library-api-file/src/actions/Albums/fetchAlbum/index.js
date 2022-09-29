const selectAlbum = require("./queries/selectAlbum");

const fetchAlbum = async ({ id }) => {
  const albumId = await selectAlbum({ id });
  return { albumId };
};

module.exports = fetchAlbum;
