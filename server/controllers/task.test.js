const request = require('supertest');
const app = require('../server');

test('Obtener tareas de usuario', async () => {
    request(app).post('/api/login')
                .send({
                    "email" : "carlos348@outlook.com",
                    "password" : "test"
                });

    const res = await request(app)
        .get('/api/task/all/user/10000')
        .expect(200);
});