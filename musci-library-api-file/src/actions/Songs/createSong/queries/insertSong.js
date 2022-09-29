const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSong = ({ name, albumId, artistId }) =>
  submitQuery`INSERT INTO Songs (song_name, Album_id, Artist_id) VALUE (${name}, ${albumId}, ${artistId});`;
module.exports = getInsertId(insertSong);
