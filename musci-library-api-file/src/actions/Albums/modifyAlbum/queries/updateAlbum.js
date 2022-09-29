const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateAlbum = ({ id, name = null, year = null, artistId = null }) => {
  const updates = [];

  if (year !== null) {
    updates.push(sql`year = ${year}`);
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
    )} WHERE Album_id = ${id};`;
  }
  return Promise.resolve();
};
module.exports = updateAlbum;
