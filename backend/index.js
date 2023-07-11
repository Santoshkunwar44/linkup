const express = require("express")
const http = require("http")
const app= express()
const server = http.createServer(app)
const io = require("socket.io")(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["POST","GET"]
    }
})

const onlineUsers =[]


const userExist=(userId)=>{
  return  onlineUsers.some(user=>user.userId === userId)
}
const getUserDataByUserId=(userId)=>{
    return onlineUsers.find(user=>user.userId ===userId)
}

io.on("connection",(socket)=>{
 
    socket.on("join",data=>{
        if(!userExist(data.userId)){

            const newUser = {
                ...data,
                socketId:socket.id
            }
            onlineUsers.push(newUser)

        }
    })

    socket.on("callUser",(data)=>{
        const {receiverId,senderId,signal}= data;
        const nextUser = getUserDataByUserId(receiverId);
        io.to(nextUser.socketId).emit("incomingCall",{
            signal,
            from:getUserDataByUserId(senderId)
        })

    })
    socket.on("answerCall",data=>{
        const {senderId,receiverId ,signal} =data;

        const from = getUserDataByUserId(senderId)
        const to = getUserDataByUserId(receiverId);

        io.to(to.socketId).emit("callAccepted",{signal,from})

    })

    socket.on("rejectCall",data=>{
        const {receiverId} = data;
        const to = getUserDataByUserId(receiverId);

        io.to(to.socketId).emit("callRejected",data)
    })  

    socket.on("disconnect",()=>{
    // socket.broadcast.emit("callEnded")        
    })
})

server.listen(8000,()=>console.log("server started"))