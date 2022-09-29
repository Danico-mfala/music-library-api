const selectAllArtists = require("./queries/selectAllArtists");

const fetchAllArtists = async () => {
  const allArtists = await selectAllArtists();
  return { allArtists };
};

module.exports = fetchAllArtists;
