const insertAlbum = require("./queries/insertAlbum");

const createAlbum = async ({ name, year, artistId }) => {
  const albumId = await insertAlbum({ name, year, artistId });
  return { albumId };
};

module.exports = createAlbum;
