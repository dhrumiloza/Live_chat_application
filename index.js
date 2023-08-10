const { Socket } = require("socket.io")
// index is a node Server hendaling socaket.io
const io = require('socket.io')(8000)
const user = {};

io.on('connection',socket =>{
    socket.on('new-user-joined', name =>{
        console.log("New user", name)
        user[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

        socket.on('send',message=>{
            socket.broadcast.emit('resive',{message: message,name: user[socket.id]})
    });
})