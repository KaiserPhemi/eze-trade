/* eslint-disable no-undef */
// third-party libraries
import request from "supertest";
import express from "express";

const app = express();

// test suite
describe("Test the root path", () => {
  test("It should response the GET method", () => {
    request(app)
      .get("/")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
