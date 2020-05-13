const chat = require('../model/Chat');

exports = module.exports = function(socket, io) {

    socket.on('entrar', (houseId) => {
        let room = 'room' + houseId;
        console.log(room);
        socket.join(room);
    });

    socket.on('chatear', (obj) => {

        let newMsg = {
            authorId: obj.user,
            houseId: obj.house,
            message: obj.msg,
            time: new Date()
        }
        console.log(newMsg);
        chat.addMessage(newMsg);
        let room = 'room' + obj.house;
        io.to(room).emit('chatear',newMsg); //Maybe change
    });

    socket.on('salir', (houseId) => {
        let room = 'room' + houseId;
        socket.leave(room);
    });
    
};