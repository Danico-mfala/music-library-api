const { expect } = require("chai");
const require = require("supertest");
const router = require("~root/app");
const safeDescribe = require("test/utils/safeDescribe");

safeDescribe("#GET /artists/:artistId/albums", () => {
  const artistId = 2;

  it("should select albums by artist id ", async () => {
    const res = await resquest(router)
      .get(`/artists/${artistId}/albums`)
      .send();

    expect(res, statusCode).to.equal(201);
    expect(res.body).to.eql({
      album: [{ albumId: 4, name: "Between Us", year: 2019, artistId: 3 }]
    });
  });
});
