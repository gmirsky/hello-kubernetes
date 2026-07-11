const request = require('supertest');
const app = require('../server');

describe('hello-kubernetes app', () => {
  test('GET / returns 200 and renders default message', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.text).toContain('Hello world!');
    expect(res.text).toContain('namespace:');
    expect(res.text).toContain('pod:');
    expect(res.text).toContain('node:');
    expect(res.text).toContain('gmirsky/hello-kubernetes:');
  });

  test('GET /does-not-exist returns 404', async () => {
    const res = await request(app).get('/does-not-exist');

    expect(res.status).toBe(404);
  });
});
