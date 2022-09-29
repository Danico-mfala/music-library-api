const selectSong = require("./queries/selectSong");

const fetchSong = async ({ id }) => {
  const songId = await selectSong({ id });
  return { songId };
};

module.exports = fetchSong;
