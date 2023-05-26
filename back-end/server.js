const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:4200/"  // gives permission for the front end
    }
})

// socket connection
io.on("connection", (socket) => {
    socket.on("chat", (payload) => { // gets data from front end
        io.emit("chat", payload)  // sends data to client
    })
})

// server
server.listen(5000, () => {
    console.log("server is active...")
})
