const { expect } = require("chai");
const request = require("supertest");
// eslint-disable-next-line import/no-unresolved
const router = require("~root/app");
// eslint-disable-next-line import/no-unresolved
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("DELETE /albums/:albumId", () => {
  const albumIdToDelete = 1;

  it("deletes album record by artist id", async () => {
    const res = await request(router).delete(`/albums/${albumIdToDelete}`);
    expect(res.status).to.equal(200);
  });
});
