const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET albums", () => {
  before(async () => {});

  it("should selct all albms list ", async () => {
    const res = await request(router)
      .get(`/albums`)
      .send();

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.eql({
      allAlbums: [
        {
          albumId: 1,
          albumName: "Zion (Deluxe Edition)",
          years: 2013,
          artistId: 2
        },
        {
          albumId: 2,
          albumName: "First Love (Live)",
          years: 2020,
          artistId: 3
        },
        {
          albumId: 3,
          albumName: "Hills and Valleys (Deluxe Edition)",
          years: 2017,
          artistId: 1
        }
      ]
    });
  });
});
