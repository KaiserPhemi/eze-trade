/* eslint-disable no-undef */
// third-party libraries
import "babel-polyfill";
import request from "supertest";

// app import
import app from "../../../../../server";

// test suite
describe("Test the /request path", () => {
  it("Should return response to the / path", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
  });

  it("Should return response to the /GET method", async () => {
    const response = await request(app).get("/api/v1/requests");
    expect(response.statusCode).toEqual(200);
  });
});

afterAll((done) => {
  done();
});
