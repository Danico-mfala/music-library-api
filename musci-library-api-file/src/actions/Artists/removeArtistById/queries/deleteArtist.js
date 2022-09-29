const { submitQuery, getInsertId } = require("~root/lib/database");

const removeArtist = ({ id }) =>
  submitQuery`DELETE FROM Artists WHERE Artist_id = ${id}`;
module.exports = getInsertId(removeArtist);
