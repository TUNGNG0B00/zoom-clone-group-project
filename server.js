const { Socket } = require("engine.io");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidv4 } = require("uuid");
const { ExpressPeerServer } = require("peer");
const { rmSync } = require("fs");
const {initializeApp} = require('firebase/app');
const {getAuth} = require("firebase/auth");
const {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} = require("firebase/auth");
const {getFirestore} = require("firebase/firestore");
const { doc, setDoc, query, deleteDoc, getDocs, collection} = require("firebase/firestore"); 
var bodyParser = require('body-parser');
const peerServer = ExpressPeerServer(server, {
    debug: true,
});


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc913R7ixS8juD5_dLg7tofx6VuYfgoxQ",
    authDomain: "zoomclone-x691.firebaseapp.com",
    projectId: "zoomclone-x691",
    storageBucket: "zoomclone-x691.appspot.com",
    messagingSenderId: "46701152622",
    appId: "1:46701152622:web:594381e4af63a6642c197f",
    measurementId: "G-GB52DMT1DT"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
let admin = false;
let parIDs = [];

rmSync;


app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const auth = getAuth();
    
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("user created");
      res.redirect('/room');
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      res.send(errorMessage);
    });
    
});

//login request route
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const auth = getAuth();
    //call firebase function to log user in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user signed in");
        admin = true;
        res.redirect('/room');
      })
      .catch((error) => {
        const errorMessage = error.message;
        res.send(errorMessage);
      });
  
});

app.post("/joincall", async (req, res) => {
  const id = req.body.participantId;

  // Add a new document in collection "participants"
  await setDoc(doc(db, "participants", id), {id},{ merge: true });
  admin = false;
  parIDs.push(id);
  res.redirect('/room');
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  const ROOM_ID = uuidv4()
  res.render("index", { roomId: ROOM_ID })
})

app.get("/room", (req, res) => {
    res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId, userName) => {
      // New logic for assigning names
      let userCount = io.sockets.adapter.rooms.get(roomId)?.size || 0;
      
      socket.join(roomId);
      
      let assignedName = userCount === 0 ? "Researcher" : `Participant ${userCount}`;
      socket.userName = assignedName;
      socket.emit("name-assigned", assignedName);

      let usersInRoom = [];
      const socketsInRoom = Array.from(
          io.sockets.adapter.rooms.get(roomId) || []
      );

      socketsInRoom.forEach((id) => {
          let userSocket = io.sockets.sockets.get(id);
          if (userSocket) {
              usersInRoom.push({
                  userId: userSocket.id,
                  userName: userSocket.userName,
              });
          }
      });

      socket.emit("admin", admin);

      async function getPar() {
        //get the participant id's from the database
        const q = query(collection(db, "participants"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          socket.emit("participants", doc.id);
        });     
      }
      getPar();

      socket.on("popReady", (data) => {
        if(data == true){
          getPar();
        }
      })

      async function delPar(id) {
      await deleteDoc(doc(db, "participants", id));
      }

      socket.on("removePop", (data) => {
        if(data == true){
          parIDs.forEach(delPar);
        }
      });

      socket.emit("users-in-room", usersInRoom);
      
      socket.on("ready", () => {
          socket.to(roomId).emit("user-connected", userId, assignedName);
      });
      socket.on("user-disconnected", () => {
          socket.leave(roomId);
          socket.to(roomId).emit("user-disconnected", userId);
      });
  });
});




server.listen(3030);
