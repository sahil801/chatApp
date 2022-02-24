import { Server } from "socket.io"



const io = new Server(9000,{
    cors:{
        origin:'http://localhost:3000'
    }
})

let users = [];
const addUser = (userid,socketid)=>{
  !users.some(user=>user.userid===userid)&&users.push({userid,socketid})

}

io.on('connection',(socket)=>{
  console.log('user connected');

  socket.on('addUser',userId =>{
    addUser(userId,socket.id);
    console.log(users);
  })
})