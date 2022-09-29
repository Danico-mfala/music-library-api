const selectAllSongs = require("./queries/selectAllSongs");

const fetchAllSongs = async () => {
  const allSongs = await selectAllSongs();
  return { allSongs };
};

module.exports = fetchAllSongs;
