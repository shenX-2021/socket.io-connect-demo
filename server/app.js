const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

io.on('connection', (socket) => {
  console.log(`${socket.id} connect`);

  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnect`);
  })
});

server.listen(3333, () => {
  console.log('listening on *:3333');
});