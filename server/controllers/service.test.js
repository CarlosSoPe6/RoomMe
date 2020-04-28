const request = require('supertest');
const app = require('./../server');

test('Obtener todos los servicios', async () => {
    let agent = request.agent(app);
    console.log('Loggin in');
    agent.post('/api/login')
        .send({
            'email': 'carlos348@outlook.com',
            'password': 'test'
        });

        console.log('Execute');
    let res = agent.get('/service')
        .expect(200);
});