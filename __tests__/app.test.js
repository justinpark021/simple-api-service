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

  test('GET /api/config returns configuration', async () => {
    const response = await request(app).get('/api/config');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('services');
  });

  test('GET /api/metrics returns API metrics', async () => {
    const response = await request(app).get('/api/metrics');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('totalRequests');
    expect(response.body).toHaveProperty('averageResponseTime');
  });
});