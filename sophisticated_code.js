/*
Filename: sophisticated_code.js

Description: This code demonstrates a sophisticated implementation of an event-driven chat application with multiple rooms, user registration, and real-time messaging using WebSocket technology.

Usage: This code requires an HTML file to render the chat interface. The user can register, join a room, and start chatting with other users in real-time.

Note: This code is for demonstration purposes only. It may not be fully optimized and can be further improved for production use.

References: 
- WebSocket API - https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
- Express.js - https://expressjs.com/
- Node.js - https://nodejs.org/
- Socket.IO - https://socket.io/

*/

// Express.js setup
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Configure Express.js static file serving
app.use(express.static('public'));

// Store registered users and their corresponding rooms
const users = {};

// WebSocket event listeners
io.on('connection', (socket) => {

  // User registration event
  socket.on('register', (user) => {
    users[socket.id] = user;
    io.emit('userList', Object.values(users));
    socket.emit('registered', user);
  });

  // Join room event
  socket.on('join', (room) => {
    const user = users[socket.id];
    socket.join(room);
    io.to(room).emit('joined', {
      user,
      room
    });
  });

  // Room chat event
  socket.on('chat', (message) => {
    const user = users[socket.id];
    io.to(message.room).emit('message', {
      user,
      message: message.text
    });
  });

  // User disconnection event
  socket.on('disconnect', () => {
    const user = users[socket.id];
    delete users[socket.id];
    io.emit('userList', Object.values(users));
    io.emit('disconnected', user);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
