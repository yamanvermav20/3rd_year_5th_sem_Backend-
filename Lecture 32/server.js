const {WebSocketServer} = require("ws");
const wss = new WebSocketServer({port : 8888})


//rooms functionality
let rooms = new Map();
// {
    // "1234":[s1, s2, s3]
// }
wss.on("connection", function(socket){
    console.log("a new user connected");
    socket.on("message", function(message){
        //{"type": "join" || "chat", "payload" : {"roomId" : "value"}}
        let parsedMessage = JSON.parse(message);
        if(parsedMessage.type == "join"){
            let roomId = parsedMessage.payload.roomId;
            if(!rooms.get(roomId)){
                rooms.set(roomId, new Set())
            }
            rooms.get(roomId).add(socket)
            socket.roomId = roomId;
            socket.send("You are added to room" + " " + roomId.toString());
            console.log(rooms)
        }
        else if(parsedMessage.type == "chat"){
            let roomId = socket.roomId;
            let message = parsedMessage.payload.message;
            let allclients = rooms.get(roomId);
            allclients.forEach(s => {
                s.send(message.toString());
            });
        }
    });
})