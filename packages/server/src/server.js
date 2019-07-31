const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', client => {
  console.log('User connected');

  client.on('messages', messages => {
    io.sockets.emit('messages', messages);
  });

  client.on('disconnect', () => {
    console.log('User diconnected');

    io.sockets.emit('usersOnline', io.engine.clientsCount);
  });

  io.sockets.emit('usersOnline', io.engine.clientsCount);
});

const port = process.env.PORT || 4000;
server.listen(port, () => `listening on ${port}`);