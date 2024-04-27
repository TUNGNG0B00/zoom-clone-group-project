const socket = io("/");
let participants = [];

//get participants id in the call from the database
socket.on("participants", function (id) {
  if (participants.includes(id) == false) {
    participants.push(id);
  }
});
socket.on("admin", (data) => {
  if (data == false) {
    document.getElementById("filters-button").style.display = "none";
    document.getElementById("submit-image-button").style.display = "none";
    document.getElementById("end-call").style.display = "none";
  }
});

function showParticipants() {
  console.log("showParticipants called");
  socket.emit("popReady", true);
  removePop("filter");
  const participantsButton = document.getElementById("participants-button");
  const participantList = document.getElementById("pop-list");
  const participantIcon = document.getElementById("participant-icon");

  participantList.innerHTML = "";

  if (participantsButton.classList.contains("active")) {
    participantsButton.classList.remove("active");
    participantIcon.classList.remove("active");
  } else {
    participantsButton.classList.add("active");
    participantIcon.classList.add("active");
  }

  if (participantList.classList.contains("hidden")) {
    participantList.classList.remove("hidden");
  } else {
    participantList.classList.add("hidden");
  }

  var title = document.createElement("h3");
  title.innerHTML = "Participants in Call:";
  participantList.appendChild(title);

  const participantUL = document.createElement("ul");
  participantUL.id = "participant-ul";
  participantUL.innerHTML = "";
  participantList.appendChild(participantUL);

  const peerIDs = Object.keys(myPeer.connections);

  const currentUserListItem = document.createElement("li");
  participantUL.appendChild(currentUserListItem);
  const hrElement = document.createElement("hr");
  participantUL.appendChild(hrElement);
  const participantsTitle = document.createElement("div");
  participantsTitle.textContent = "Participants:";
  participantUL.appendChild(participantsTitle);

  //display participant id's
  for (let i = 0; i < participants.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `ID: ${participants[i]}`;
    participantUL.appendChild(listItem);
  }
}

const toggleMute = () => {
  const muteSet = myVideoStream.getAudioTracks()[0].enabled;
  const mutebutton = document.getElementById("mute-button");
  if (muteSet) {
    mutebutton.classList.add("active");
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnMuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
    mutebutton.classList.remove("active");
  }
};

const toggleCamera = () => {
  const videoTracks = myVideoStream.getVideoTracks();
  if (videoTracks.length == 0) {
    return;
  }

  const isEnabled = videoTracks[0].enabled;

  if (isEnabled) {
    setPlayVideo();
    videoTracks[0].enabled = false;
    return;
  }

  setStopVideo();
  videoTracks[0].enabled = true;
};

function toggleSlider() {
  var sliderPopup = document.getElementById("sliderPopup");
  if (sliderPopup.classList.contains("hidden")) {
    sliderPopup.classList.remove("hidden");
  } else {
    sliderPopup.classList.add("hidden");
  }
}

const setMuteButton = () => {
  const html = `
        <i class="fas fa-microphone" id="mute-icon"></i>
        <span>&nbsp;&nbsp;Mute</span> 
        `;
  document.querySelector(".control-button").innerHTML = html;

  var micButton = document.getElementById("mute-button");
  var micIcon = document.getElementById("mute-icon");

  micButton.classList.remove("active");
  micIcon.classList.remove("active");
};

const setUnMuteButton = () => {
  const html = `<i class="fas fa-microphone-slash controls-bar" id="mute-icon"></i>
      <span>&nbsp;&nbsp;Un-Mute</span> 
        `;
  document.querySelector(".control-button").innerHTML = html;

  var micButton = document.getElementById("mute-button");
  var micIcon = document.getElementById("mute-icon");

  micButton.classList.add("active");
  micIcon.classList.add("active");
};

const setStopVideo = () => {
  const html = `
        <i class="fas fa-video" id="camera-icon"></i>
        <span>&nbsp;&nbsp;Stop Camera</span>
        `;
  document.querySelector(".control-button-video").innerHTML = html;

  var camButton = document.getElementById("camera-button");
  var camIcon = document.getElementById("camera-icon");

  camButton.classList.remove("active");
  camIcon.classList.remove("active");
};

const setPlayVideo = () => {
  const html = `
        <i class="stop fas fa-video-slash" id="camera-icon"></i>
        <span>&nbsp;&nbsp;Play Camera</span>
        `;

  document.querySelector(".control-button-video").innerHTML = html;
  var camButton = document.getElementById("camera-button");
  var camIcon = document.getElementById("camera-icon");

  camButton.classList.add("active");
  camIcon.classList.add("active");
};
