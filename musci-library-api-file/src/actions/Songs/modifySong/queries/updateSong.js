const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateSong = ({ id, name = null, albumId = null, artistId = null }) => {
  const updates = [];

  if (albumId !== null) {
    updates.push(sql`Album_id = ${albumId}`);
  }
  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }
  if (artistId !== null) {
    updates.push(sql`Artist_id = ${artistId}`);
  }
  if (updates.length !== 0) {
    return submitQuery`UPDATE Albums SET ${updates.reduce(
      sqlReduce
    )} WHERE Song_id = ${id};`;
  }
  return Promise.resolve();
};
module.exports = updateSong;
