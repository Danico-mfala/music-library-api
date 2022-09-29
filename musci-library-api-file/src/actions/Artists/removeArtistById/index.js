const deleteArtist = require("./queries/deleteArtist");

const removeArtist = async ({ id }) => {
  const artistId = await deleteArtist({ id });
  return { artistId };
};

module.exports = removeArtist;
