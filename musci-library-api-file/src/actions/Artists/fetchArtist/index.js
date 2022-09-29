const selectArtist = require("./queries/selectArtist");

const fetchArtist = async ({ id }) => {
  const artist = await selectArtist({ id });
  return { artist };
};

module.exports = fetchArtist;
