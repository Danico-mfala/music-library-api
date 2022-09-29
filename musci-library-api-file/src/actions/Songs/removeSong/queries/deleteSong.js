const { submitQuery, getInsertId } = require("~root/lib/database");

const removeSong = ({ id }) =>
  submitQuery`DELETE FROM Songs WHERE song_id = ${id}`;
module.exports = getInsertId(removeSong);
