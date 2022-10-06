const { expect } = require("chai");
const request = require("supertest");
// eslint-disable-next-line import/no-unresolved
const safeDescribe = require("~test/utils/safeDescribe");
// eslint-disable-next-line import/no-unresolved
const router = require("~root/app");

safeDescribe("#GET /artists/:artistId/albums", () => {
  const artistId = 3;

  it("should select albums by artist id ", async () => {
    const res = await request(router)
      .get(`/albums/:id${artistId}`)
      .send();

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      album: [{ albumId: 4, name: "Between Us", year: 2019, artistId: 3 }]
    });
  });
});
