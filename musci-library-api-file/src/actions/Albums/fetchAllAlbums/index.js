const selectAllAlbums = require("./queries/selectAllAlbums");

const fetchAllAlbums = async () => {
  const allAlbums = await selectAllAlbums();
  return { allAlbums };
};

module.exports = fetchAllAlbums;
