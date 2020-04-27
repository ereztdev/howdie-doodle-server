const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
app.use(cors())

server.listen(3000);
// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
    console.log('successful connection');
    socket.emit('success', {message: 'successful connection'});
    socket.on('chat', (data) => {
        console.log(data);
        socket.broadcast.emit('chat', data);
    });
    socket.on('painting', (data) => {
        socket.broadcast.emit('painting', data);
    });
    socket.on('clearAll', (data) => {
        socket.broadcast.emit('clearAll', data);
    });
    socket.on('disconnect', () => {
        console.log("A user disconnected");
    });
});
