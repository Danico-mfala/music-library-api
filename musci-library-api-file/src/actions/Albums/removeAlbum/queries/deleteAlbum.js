const { submitQuery, getInsertId } = require("~root/lib/database");

const removeAlbum = ({ id }) =>
  submitQuery`DELETE FROM Albums WHERE Album_id = ${id}`;
module.exports = getInsertId(removeAlbum);
