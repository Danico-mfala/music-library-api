const deleteSong = require("./queries/deleteSong");

const removeSong = async ({ id }) => {
  const albumId = await deleteSong({ id });
  return { albumId };
};

module.exports = removeSong;
