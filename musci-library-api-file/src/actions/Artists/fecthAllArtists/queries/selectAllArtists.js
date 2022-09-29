const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`SELECT * FROM Artists`;
module.exports = camelKeys(selectAllArtists);
