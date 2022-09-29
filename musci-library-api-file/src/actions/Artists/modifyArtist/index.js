const updateArtist = require("./queries/updateArtist");

const modifyArtist = async ({ id, name, genre }) => {
  const artist = await updateArtist({ id, name, genre });
  return { artist };
};

module.exports = modifyArtist;
