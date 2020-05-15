const chat = require('../model/Chat');
const User = require('../model/User');

exports = module.exports =  function(socket, io) {

    socket.on('entrar', (houseId) => {
        let room = 'room' + houseId;
        console.log(room);
        socket.join(room);
    });

    socket.on('chatear', async (obj) => {

        let sender =  await User.getSingleUser({'uid':obj.user});

        let newMsg = {
            authorName: `${sender.name} ${sender.lastName}`,
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