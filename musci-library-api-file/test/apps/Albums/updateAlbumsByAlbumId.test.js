const { expect } = require("chai");
const request = require("supertest");
// eslint-disable-next-line import/no-unresolved
const selectAlbumByAlbumId = require("./queries/selectAlbumByAlbumId");
// eslint-disable-next-line import/no-unresolved
const router = require("~root/app");
// eslint-disable-next-line import/no-unresolved
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#PATCH album details by albumId", () => {
  const albumId = 1;

  it("updates artist name by id", async () => {
    const response = await request(router)
      .patch(`/albums/:id${albumId}`)
      .send({
        name: "The Slow Rush"
      });

    expect(response.status).to.equal(201);
    const result = await selectAlbumByAlbumId({ albumId });
    expect(result).to.eql([
      { albumId: 1, albumName: "The Slow Rush", albumYear: 2015, artistId: 1 }
    ]);
  });
});
