const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "https://mike-orejuela-portfolio.onrender.com",
    methods: ["GET", "POST"],
  }
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", (socket) => {
    console.log('User disconnected');
  })
})

server.listen(3001, () => {
  console.log("Server Running");
})