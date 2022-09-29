const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbum = ({ id }) =>
  submitQuery`SELECT * FROM Albums WHERE Album_id = ${id}`;
module.exports = camelKeys(selectAlbum);
