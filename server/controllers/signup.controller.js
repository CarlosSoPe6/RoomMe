const User = require('../model/User');

class RegisterController {
    async registerUser(req, res) {
        try {
            await User.createSelfUser(
                req.body.name, 
                req.body.lastName,
                req.body.email,
                req.body.password,
                ""
            );
            res.send({msg : "Succes!"});
        } catch(err) {
            console.log(err.errmsg);
            let message = 'Error desconocido';
            if(err.keyValue.hasOwnProperty('email'))
                message = 'Correo registrado';
            res.status(400).send({
                error: message
            });
        }
    }
}

module.exports = new RegisterController();