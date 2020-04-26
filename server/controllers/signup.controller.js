const User = require('../model/User');

class RegisterController {
    async registerUser(req, res) {
        try {
            await User.createSelfUser(
                req.body.name, 
                req.body.lastName,
                req.body.email,
                req.body.photo,
                req.body.password,
                req.body.phone
            );
            res.sendStatus(200);
        } catch(err) {
            console.log(err);
            res.status(400).send({
                error : "Error al añadir nuevo usuario."
            });
        }
    }
}

module.exports = new RegisterController();