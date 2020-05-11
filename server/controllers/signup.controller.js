const User = require('../model/User');

class RegisterController {
    async registerUser(req, res) {
        try {
            console.log(req.body);
            await User.createSelfUser(
                req.body.name, 
                req.body.lastName,
                req.body.email,
                req.body.photo,
                req.body.password,
                req.body.phone
            );
            res.send({msg : "Succes!"});
        } catch(err) {
            console.log(err);
            res.status(400).send({
                error : "Error al añadir nuevo usuario."
            });
        }
    }
}

module.exports = new RegisterController();