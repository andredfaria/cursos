const express = require('express');
const app = express();

app.use(express.static('public'));

const http = require('http').Server(app);
const serverSocket = require('socket.io')(http);

http.listen(8000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

serverSocket.on('connection', function (socket) {
    console.log('Cliente conectado: ' + socket.id);

    socket.on('chat', function (msg) {
        console.log(`a mensagem é ${msg}`);

        serverSocket.emit('chat', msg);
    });

});