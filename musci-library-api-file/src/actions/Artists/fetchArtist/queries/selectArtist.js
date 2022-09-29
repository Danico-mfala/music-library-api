const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtist = ({ id }) =>
  submitQuery`SELECT * FROM Artists WHERE Artist_id = ${id}`;
module.exports = camelKeys(selectArtist);
