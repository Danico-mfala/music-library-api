const updateSong = require("./queries/updateSong");

const modifyAlbum = async ({ id, name, albumId, artistId }) => {
  const song = await updateSong({ id, name, albumId, artistId });
  return { song };
};

module.exports = modifyAlbum;
