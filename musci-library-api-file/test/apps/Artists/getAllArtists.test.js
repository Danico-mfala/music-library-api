const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
// const deleteArtistById = require("./queries/deleteArtistsById");

safeDescribe("#POST artists", () => {
  // let artistIdCreated;

  // after(async () => {
  //     await deleteArtistById({ artistId: artistIdCreated });
  // });
  it("creates a new artist in the database", async () => {
    const response = await request(router)
      .post("/artists")
      .send({
        name: "DANICO SAN",
        genre: "ROCK"
      });
    // artistIdCreated = response.body.artistId;

    expect(response.status).to.equal(201);
  });
});
