const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello from CI/CD pipeline!'));

test('GET / should return Hello message', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello from CI/CD pipeline!');
});
