const { expect } = require("chai");
const request = require("supertest");
// eslint-disable-next-line import/no-unresolved
const router = require("~root/app");
// eslint-disable-next-line import/no-unresolved
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#POST Albums", () => {
  it("creates a new album in the database", async () => {
    const response = await request(router)
      .post(`/albums`)
      .send({
        name: "Chute libre",
        year: 2014,
        artistId: 1
      });

    expect(response.status).to.equal(201);
  });
});
