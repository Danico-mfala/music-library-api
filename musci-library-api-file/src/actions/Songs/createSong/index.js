const insertSong = require("./queries/insertSong");

const createSong = async ({ name, albumId, artistId }) => {
  const songId = await insertSong({ name, albumId, artistId });
  return { songId };
};

module.exports = createSong;
