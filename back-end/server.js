const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
io.on("connection", (socket) => {
    console.log("the socket is active , the socket is ", socket)
    socket.on("chat", (payload) => {
        console.log(payload)
        io.emit("chat", payload)
    })
})

server.listen(5000, () => {
    console.log("server is active...")
})
