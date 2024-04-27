// Sets up the form submission for joining a call
const setupJoinCallFormSubmission = () => {
  const joinCallForm = document.getElementById("join-call-form");
  if (joinCallForm) {
    joinCallForm.addEventListener("submit", function (event) {
      const participantId = document.getElementById("participant-id").value;

      if (!participantId) {
        // If the participant ID is empty, prevent form submission
        alert("Please enter your ID number.");
        event.preventDefault();
        return;
      }
      const isConfirmed = confirm(
        `Are you sure ${participantId} is your ID number?`
      );

      if (!isConfirmed) {
        // If the user does not confirm, prevent the form from submitting
        event.preventDefault();
      }
      // If the user confirms, the form will submit as usual
    });
  }
};
document.addEventListener("DOMContentLoaded", setupJoinCallFormSubmission());

const participantsNames = {}; //me

const videoGrid = document.getElementById("video-grid"); // Reference to the video grid in the HTML
const userVideoContainers = {}; //store references to video containers for each user
let background = "none";
let running = false;

// Create a new Peer instance for the current user
var myPeer = new Peer(undefined, {
  path: "/peerjs",
  host: "/",
  port: "3030",
});

let myVideoStream;
let myVideo; // Declare myVideo at the top level

// Get user's video and audio stream
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;

    // Initially set the video and audio to be off
    setUnMuteButton();
    setAudioTrackEnabled(stream, false);

    setPlayVideo();
    setVideoTrackEnabled(stream, false);

    // Create a video element for the current user's stream
    myVideo = document.createElement("video"); // Assign the video element here
    const myUserId = myPeer.id;
    myVideo.muted = true;
    myVideo.style.transform = "scaleX(-1)"; // Flip the video horizontally
    addVideoStream(myVideo, stream, myUserId);

    myPeer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        const userId = call.peer;
        addVideoStream(video, userVideoStream, userId);
      });
    });
    socket.emit("ready");

    // Listen for other users connecting and add their video streams
    socket.on("user-connected", (userId, userName) => {
      console.log(`User connected with ID: ${userId} Name: ${userName}`);
      participantsNames[userId] = userName;
      connectToNewUser(userId, stream);
    });
  });

// Function to enable or disable audio
function setAudioTrackEnabled(stream, enabled) {
  if (!stream) return;
  const tracks = stream.getAudioTracks();
  if (Array.isArray(tracks)) {
    tracks.forEach((track) => {
      track.enabled = enabled;
    });
  }
}

// Function to enable or disable video
function setVideoTrackEnabled(stream, enabled) {
  if (!stream) return;
  const tracks = stream.getVideoTracks();
  if (Array.isArray(tracks)) {
    tracks.forEach((track) => {
      track.enabled = enabled;
    });
  }
}

// When the Peer connection is open, join the room with the current user's ID
myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

// Listen for the server assigning a name to the current user
socket.on("name-assigned", (assignedName) => {
  participantsNames[myPeer.id] = assignedName;
});

// Listen for other users disconnecting and remove their video elements
socket.on("user-disconnected", (userId) => {
  const containerToRemove = userVideoContainers[userId];
  if (containerToRemove) {
    while (containerToRemove.firstChild) {
      containerToRemove.removeChild(containerToRemove.firstChild);
    }
    containerToRemove.remove();
    delete userVideoContainers[userId];
  }
});

// Listen for the server sending the list of users in the room and update the participants' names
socket.on("users-in-room", (users) => {
  users.forEach((user) => {
    participantsNames[user.userId] = user.userName;
  });
});

socket.on("user-disconnected", (userId) => {
  const videoToRemove = userVideoElements[userId];
  if (videoToRemove) {
    videoToRemove.remove();
    delete userVideoElements[userId];
  }
});
// Connect to a new user and add their video stream to the video grid
const connectToNewUser = (userId, stream) => {
  const call = myPeer.call(userId, stream); // Call the new user with the current user's stream
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream, userId); // Add the new user's video stream to the video grid
  });
};

//Function to add a video stream to the video grid.
const addVideoStream = (video, stream, userId) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
    let container = userVideoContainers[userId];

    if (!container) {
      //containers will hold both the videos and canvases
      const container = document.createElement("div");
      container.className = "video-container";

      const canvas = document.createElement("canvas");
      canvas.className = "video-canvas";
      canvas.hidden = true;

      canvas.height = 324;
      canvas.width = 427;

      video.height = 324;
      video.width = 427;

      container.appendChild(canvas);

      container.id = userId;
      userVideoContainers[userId] = container;

      videoGrid.append(container);
      container.appendChild(video);
    }
  });
};

//Function to confirm with the user before leaving the call
const confirmLeave = () => {
  var confirmLeave = confirm("Are you sure you want to leave the call?");
  if (confirmLeave) {
    socket.emit("removePop", true);
    leaveCall();
  }
};

//Function to leave the call and go to the homepage
const leaveCall = () => {
  myPeer.destroy();
  socket.emit("user-disconnected"); // Notify the server that the user has disconnected.
  window.location.href = "http://localhost:3030/"; // Redirect to the homepage
};

//Function to start the call by navigating to the room URL
function startCall() {
  window.location.href = "/" + ROOM_ID;
}

const videoContainers = document.getElementsByClassName("video-container");

document
  .getElementById("submit-image-button")
  .addEventListener("click", function () {
    document.getElementById("imageUpload").click();
  });

document
  .getElementById("imageUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      alterBackground("none");
      alterBackground("cafe");
      const reader = new FileReader();
      reader.onload = function (e) {
        for (let i = 0; i < videoContainers.length; i++) {
          const canvas = videoContainers[i].firstChild;
          const video = videoContainers[i].lastChild;
          video.hidden = true;
          canvas.hidden = false;
          videoContainers[i].style.transform = "scaleX(-1)";
          videoContainers[
            i
          ].style.backgroundImage = `url('${e.target.result}')`;
          loadBodyPix("upload");
        }
      };
      reader.readAsDataURL(file);
    }
  });

// if 2nd user exits from browser.
window.addEventListener("beforeunload", function (e) {
  // This function will call when the user is about to leave the page.

  e.returnValue = "Are you sure you want to leave this page?";
  leaveCall();
});
