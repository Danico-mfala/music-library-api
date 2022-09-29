const deleteAlbum = require("./queries/deleteAlbum");

const removeAlbum = async ({ id }) => {
  const albumId = await deleteAlbum({ id });
  return { albumId };
};

module.exports = removeAlbum;
