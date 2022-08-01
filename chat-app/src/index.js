const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

let count = 0;

//server (emit) -> client (recieve) - countUpdated
//client (emit) -> client (recieve) - increment

io.on("connection", (socket) => {
  console.log("New Websocket Connection");

  socket.emit("message", "Welcome!");
  socket.broadcast.emit("message", "A new user has joined!");

  socket.on("sendMessage", (message, callback) => {
    io.emit("message", message);
    callback("Delivered!");
  });

  socket.on("sendLocation", (coords) => {
    io.emit(
      "message",
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`
    );
  });

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });
});

server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
