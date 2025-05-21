
const request = require("supertest");
const app = require("../index.js");

const routes = require('./posts.js');
describe('testing/post',() => {
  const post = {
    title: "Hyperion", 
    body: "Dan Simmons"
  };

test("Create a post", async () => {
    respost = await request(app).post("/create").send(post).expect(201);
    expect(respost.body._id).toBeDefined();
    expect(respost.body.createdAt).toBeDefined();
    expect(respost.body.updatedAt).toBeDefined();
  })
});
