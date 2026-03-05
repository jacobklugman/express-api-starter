import request from 'supertest'
import app from '../app'

describe('POST /api/auth/register', () => {
  it('creates a new user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    })
    expect(res.status).toBe(201)
    expect(res.body.token).toBeDefined()
  })

  it('rejects duplicate email', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    })
    expect(res.status).toBe(409)
  })
})