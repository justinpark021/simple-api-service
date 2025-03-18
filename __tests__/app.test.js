const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  test('GET /api/health returns status ok', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });
  
  test('GET /api/environments returns environments list', async () => {
    const response = await request(app).get('/api/environments');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});