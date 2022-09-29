const { submitQuery, getInsertId } = require("~root/lib/database");

const insertAlbum = ({ name, year, artistId }) =>
  submitQuery`INSERT INTO Albums(Album_name, years, Artist_id) VALUE (${name}, ${year}, ${artistId});`;
module.exports = getInsertId(insertAlbum);
