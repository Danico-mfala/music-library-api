const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSong = ({ id }) =>
  submitQuery`SELECT * FROM Songs WHERE song_id = ${id}`;
module.exports = camelKeys(selectSong);
