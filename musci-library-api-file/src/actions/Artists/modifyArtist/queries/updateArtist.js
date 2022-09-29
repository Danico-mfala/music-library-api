const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateArtist = ({ id, name = null, genre = null }) => {
  const updates = [];

  if (genre !== null) {
    updates.push(sql`genre = ${genre}`);
  }
  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }
  if (updates.length !== 0) {
    return submitQuery`UPDATE Artists SET ${updates.reduce(
      sqlReduce
    )} WHERE Artist_id = ${id};`;
  }
  return Promise.resolve();
};
module.exports = updateArtist;
