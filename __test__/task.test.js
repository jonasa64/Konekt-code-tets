const request = require("supertest");
const app = require("../app");

describe("task endpoints", () => {
  test("task stat endpoint should return 200 ok", async () => {
    const res = await request(app).get("/tasks/start").send();
    expect(res.statusCode).toBe(200);
  });

  test("task status endpoint should return 200 ok if task exist", async () => {
    const id = "0b1a5377-dc52-495e-8014-4bd3e7637038";
    const res = await request(app).get(`/tasks/status/${id}`).send();
    expect(res.statusCode).toBe(200);
  });

  test("task status endpoint should return 404 if task does not exist", async () => {
    const id = "123";
    const res = await request(app).get(`/tasks/status/${id}`).send();
    expect(res.statusCode).toBe(404);
  });
});
