import request from 'supertest'
import app from '../src/server/start'
import mongoDB from '../src/db/connection'

// const request = supertest()

describe("Test the root path", () => {

  test("It should response the GET method", async () => {
    const response = await request(app).post("/auth/signup")
    expect(response.statusCode).toBe(201)
    
  })


})