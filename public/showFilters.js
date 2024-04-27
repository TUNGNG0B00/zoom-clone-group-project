function showFilters() {    //ramisa
  removePop("participant");
  var filterList = document.getElementById("pop-list");
  var filterButton = document.getElementById("filters-button");
  var filterIcon = document.getElementById("filters-icon");

  filterList.innerHTML = "";

  var title = document.createElement("h3");
  title.id = "pop-title";
  title.innerHTML = "Filters:";
  filterList.appendChild(title);

  const filtersUL = document.createElement("ul");
  filtersUL.id = "filters-ul";
  filtersUL.innerHTML = "";
  filterList.appendChild(filtersUL);

  // no background button
  const noBackgroundListItem = document.createElement("li");
  filtersUL.appendChild(noBackgroundListItem);

  const noBackgroundButton = document.createElement("button");
  noBackgroundButton.textContent = "None";
  noBackgroundButton.addEventListener("click", () => alterBackground("none"));

  noBackgroundListItem.appendChild(noBackgroundButton);

  // blur background button
  const backgroundBlurListItem = document.createElement("li");
  filtersUL.appendChild(backgroundBlurListItem);

  const blurBackgroundButton = document.createElement("button");
  blurBackgroundButton.textContent = "Blur Background";
  blurBackgroundButton.addEventListener("click", () => alterBackground("blur"));

  backgroundBlurListItem.appendChild(blurBackgroundButton);

  // office background button
  const officeBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(officeBackgroudListItem);

  const officeBackgroundButton = document.createElement("button");
  officeBackgroundButton.textContent = "Office Background";
  officeBackgroundButton.addEventListener("click", () =>
    alterBackground("office")
  );

  officeBackgroudListItem.appendChild(officeBackgroundButton);

  // cafe background button
  const cafeBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(cafeBackgroudListItem);

  const cafeBackgroundButton = document.createElement("button");
  cafeBackgroundButton.textContent = "Cafe Background";
  cafeBackgroundButton.addEventListener("click", () => alterBackground("cafe"));

  cafeBackgroudListItem.appendChild(cafeBackgroundButton);

  // rowboat background button
  const boatBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(boatBackgroudListItem);

  const boatBackgroundButton = document.createElement("button");
  boatBackgroundButton.textContent = "Row Boat Background";
  boatBackgroundButton.addEventListener("click", () => alterBackground("boat"));

  boatBackgroudListItem.appendChild(boatBackgroundButton);

  // space background button
  const spaceBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(spaceBackgroudListItem);

  const spaceBackgroundButton = document.createElement("button");
  spaceBackgroundButton.textContent = "Space Background";
  spaceBackgroundButton.addEventListener("click", () =>
    alterBackground("space")
  );

  spaceBackgroudListItem.appendChild(spaceBackgroundButton);

  // ocean background button
  const oceanBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(oceanBackgroudListItem);

  const oceanBackgroundButton = document.createElement("button");
  oceanBackgroundButton.textContent = "Ocean Background";
  oceanBackgroundButton.addEventListener("click", () =>
    alterBackground("ocean")
  );

  oceanBackgroudListItem.appendChild(oceanBackgroundButton);

  // straw background button
  const strawBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(strawBackgroudListItem);

  const strawBackgroundButton = document.createElement("button");
  strawBackgroundButton.textContent = "Straw Background";
  strawBackgroundButton.addEventListener("click", () =>
    alterBackground("straw")
  );

  strawBackgroudListItem.appendChild(strawBackgroundButton);

    // makeup background button
    const makeupBackgroudListItem = document.createElement("li");
    filtersUL.appendChild(makeupBackgroudListItem);
  
    const makeupBackgroundButton = document.createElement("button");
    makeupBackgroundButton.textContent = "Makeup Background";
    makeupBackgroundButton.addEventListener("click", () =>
      alterBackground("makeup")
    );
  
    makeupBackgroudListItem.appendChild(makeupBackgroundButton);

  // lavender background button
  const lavenderBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(lavenderBackgroudListItem);

  const lavenderBackgroundButton = document.createElement("button");
  lavenderBackgroundButton.textContent = "Lavender Background";
  lavenderBackgroundButton.addEventListener("click", () =>
    alterBackground("lavender")
  );

  lavenderBackgroudListItem.appendChild(lavenderBackgroundButton);

  // mist blue background button
  const mistBlueBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(mistBlueBackgroudListItem);

  const mistBlueBackgroundButton = document.createElement("button");
  mistBlueBackgroundButton.textContent = "Mist Blue Background";
  mistBlueBackgroundButton.addEventListener("click", () =>
    alterBackground("mist blue")
  );

  mistBlueBackgroudListItem.appendChild(mistBlueBackgroundButton);

  // fern green background button
  const fernGreenBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(fernGreenBackgroudListItem);

  const fernGreenBackgroundButton = document.createElement("button");
  fernGreenBackgroundButton.textContent = "Fern Green Background";
  fernGreenBackgroundButton.addEventListener("click", () =>
    alterBackground("fern green")
  );

  fernGreenBackgroudListItem.appendChild(fernGreenBackgroundButton);

  //ring light backgroundbutton
  const ringLightBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(ringLightBackgroudListItem);

  const ringLightBackgroudButton = document.createElement("button");
  ringLightBackgroudButton.textContent = "Ring Light Background";
  ringLightBackgroudButton.addEventListener("click", () =>
    alterBackground("ring light")
  );

  ringLightBackgroudListItem.appendChild(ringLightBackgroudButton);

    //professional clothing
    const profBackgroudListItem = document.createElement("li");
    filtersUL.appendChild(profBackgroudListItem);
  
    const profBackgroudButton = document.createElement("button");
    profBackgroudButton.textContent = "Suit and Tie";
    profBackgroudButton.addEventListener("click", () =>
      alterBackground("clothing")
    );
  
    profBackgroudListItem.appendChild(profBackgroudButton);

  //Professional Office background I button
  const officeIBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(officeIBackgroudListItem);

  const officeIBackgroundButton = document.createElement("button");
  officeIBackgroundButton.textContent = "Office Background I";
  officeIBackgroundButton.addEventListener("click", () =>
    alterBackground("office I")
  );

  officeIBackgroudListItem.appendChild(officeIBackgroundButton);

  //Professional Office background II button
  const officeIIBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(officeIIBackgroudListItem);

  const officeIIBackgroundButton = document.createElement("button");
  officeIIBackgroundButton.textContent = "Office Background II";
  officeIIBackgroundButton.addEventListener("click", () =>
    alterBackground("office II")
  );

  officeIIBackgroudListItem.appendChild(officeIIBackgroundButton);

  //Cothing background button
  const clothingBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(clothingBackgroudListItem);

  const clothingBackgroundButton = document.createElement("button");
  clothingBackgroundButton.textContent = "Clothing Background";
  clothingBackgroundButton.addEventListener("click", () =>
    alterBackground("clothing")
  );

  clothingBackgroudListItem.appendChild(clothingBackgroundButton);

  //Library Background

  const libraryBackgroudListItem = document.createElement("li");
  filtersUL.appendChild(libraryBackgroudListItem);

  const libraryBackgroundButton = document.createElement("button");
  libraryBackgroundButton.textContent = "Library Background";
  libraryBackgroundButton.addEventListener("click", () =>
    alterBackground("library")
  );

  libraryBackgroudListItem.appendChild(libraryBackgroundButton);

  //conference room background button
  const conferenceRoomBackgroundListItem = document.createElement("li");
  filtersUL.appendChild(conferenceRoomBackgroundListItem);

  const conferenceRoomBackgroundButton = document.createElement("button");
  conferenceRoomBackgroundButton.textContent = "Conference Room I";
  conferenceRoomBackgroundButton.addEventListener("click", () =>
    alterBackground("conference room")
  );

  conferenceRoomBackgroundListItem.appendChild(conferenceRoomBackgroundButton);

  //conference room II background button
  const conferenceRoomBackgroundIIListItem = document.createElement("li");
  filtersUL.appendChild(conferenceRoomBackgroundIIListItem);

  const conferenceRoomBackgroundIIButton = document.createElement("button");
  conferenceRoomBackgroundIIButton.textContent = "Conference Room II";
  conferenceRoomBackgroundIIButton.addEventListener("click", () =>
    alterBackground("conference room II")
  );

  conferenceRoomBackgroundIIListItem.appendChild(
    conferenceRoomBackgroundIIButton
  );

  if (filterButton.classList.contains("active")) {
    filterButton.classList.remove("active");
    filterIcon.classList.remove("active");
  } else {
    filterButton.classList.add("active");
    filterIcon.classList.add("active");
  }

  if (filterList.classList.contains("hidden")) {
    filterList.classList.remove("hidden");
  } else {
    filterList.classList.add("hidden");
  }
}

function alterBackground(mode) {
  const userId = myPeer.id;
  const myContainer = document.getElementById(userId);
  const myCanvas = document.getElementById(userId).firstChild;
  const myVideo = document.getElementById(userId).lastChild;

  myVideo.hidden = true;
  myCanvas.hidden = false;

  if (mode == "none") {
    myVideo.hidden = false;
    myCanvas.hidden = true;
    myContainer.style.backgroundImage = "";
    background = "none";
    myContainer.style.transform = "scaleX(1)";
  } else {
    // Only apply transformation when the mode is not 'none'
    myContainer.style.transform = "scaleX(-1)";
    if (mode == "blur") {
      myContainer.style.backgroundImage = "";
      background = "blur";
    } else if (mode == "office") {
      myContainer.style.backgroundImage = 'url("backgrounds/Office1.jpg")';
      background = "office";
    } else if (mode == "cafe") {
      myContainer.style.backgroundImage = 'url("backgrounds/cafe.jpg")';
      background = "cafe";
    } else if (mode == "boat") {
      myContainer.style.backgroundImage = 'url("backgrounds/lakeboat.jpg")';
      background = "boat";
    } else if (mode == "clothing") {
      myContainer.style.backgroundImage = 'url("backgrounds/clothing.png")';
      background = "clothing";
    } else if (mode == "space") {
      myContainer.style.backgroundImage = 'url("backgrounds/Space.jpg")';
      background = "space";
    } else if (mode == "ocean") {
      myContainer.style.backgroundImage = 'url("backgrounds/Ocean.jpg")';
      background = "ocean";
    } else if (mode == "straw") {
      myContainer.style.backgroundImage = 'url("backgrounds/straw.jpg")';
      background = "straw";
    } else if (mode == "lavender") {
      myContainer.style.backgroundImage = 'url("backgrounds/lavender.jpg")';
      background = "lavender";
    } else if (mode == "mist blue") {
      myContainer.style.backgroundImage = 'url("backgrounds/mist blue.jpg")';
      background = "mist blue";
    } else if (mode == "fern green") {
      myContainer.style.backgroundImage = 'url("backgrounds/fern green.jpg")';
      background = "fern green";
    } else if (mode == "makeup") {
      myContainer.style.backgroundImage = 'url("backgrounds/makeup.jpg")';
      background = "makeup";
    } else if (mode == "ring light") {
      myContainer.style.backgroundImage = 'url("backgrounds/ring light.jpg")';
      background = "ring light";
    } else if (mode == "office I") {
      myContainer.style.backgroundImage = 'url("backgrounds/office I.jpg")';
      background = "office I";
    } else if (mode == "office II") {
      myContainer.style.backgroundImage = 'url("backgrounds/office II.jpg")';
      background = "office II";
    } else if (mode == "clothing") {
      myContainer.style.backgroundImage = 'url("backgrounds/clothing.jpg")';
      background = "clothing";
    } else if (mode == "library") {
      myContainer.style.backgroundImage = 'url("backgrounds/library.jpg")';
      background = "library";
    } else if (mode == "conference room") {
      myContainer.style.backgroundImage =
        'url("backgrounds/conference-room.jpg")';
      background = "conference room";
    } else if (mode == "conference room II") {
      myContainer.style.backgroundImage =
        'url("backgrounds/conference-roomII.jpg")';
      background = "conference room II";
    }
    loadBodyPix(mode);
  }
}

function checkPopOn(name) {
  var filterButton = document.getElementById("filters-button");
  const participantsButton = document.getElementById("participants-button");
  var check = false;

  if (name == "filter") {
    if (filterButton.classList.contains("active")) {
      check = true;
    }
  }

  if (name == "participant") {
    if (participantsButton.classList.contains("active")) {
      check = true;
    }
  }

  return check;
}

function removePop(name) {
  var filterList = document.getElementById("pop-list");
  var filterButton = document.getElementById("filters-button");
  var filterIcon = document.getElementById("filters-icon");
  const participantsButton = document.getElementById("participants-button");
  const participantList = document.getElementById("pop-list");
  const participantIcon = document.getElementById("participant-icon");

  if (name == "filter") {
    if (checkPopOn("filter")) {
      filterList.classList.add("hidden");
      filterButton.classList.remove("active");
      filterIcon.classList.remove("active");
    }
  }
  if (name == "participant") {
    if (checkPopOn("participant")) {
      participantList.classList.add("hidden");
      participantsButton.classList.remove("active");
      participantIcon.classList.remove("active");
    }
  }
}

function loadBodyPix(mode) {
  options = {
    multiplier: 0.75, // higher value = higher accuracy but lower speed (0.25, 0.50, 0.75, 1.00)
    stride: 16, // higher value = higher speed but lower accuracy (8, 16, 32)
    quantBytes: 4,
  };

  if (!running) {
    if (!(mode == "none")) {
      activeModel = bodyPix
        .load(options)
        .then((net) => perform(net))
        .catch((err) => console.log(err));
    }
  }
}

async function perform(net) {
  const userId = myPeer.id;
  const videoCanvas = document.getElementById(userId).firstChild;
  const myVideoVirtual = document.getElementById(userId).lastChild;
  var videoContext = videoCanvas.getContext("2d");
  running = true;

  const backgroundBlurAmount = 3; //adjust blur between 1-20
  const edgeBlurAmount = 3;
  const flipHorizontal = false;

  var width = myVideoVirtual.width;
  var height = myVideoVirtual.height;

  while (!(background == "none")) {
    segmentation = await net.segmentPerson(myVideoVirtual, {
      flipHorizontal: false,
      internalResolution: "high",
      segmentationThreshold: 0.7,
    });

    if (background == "blur") {
      bodyPix.drawBokehEffect(
        videoCanvas,
        myVideoVirtual,
        segmentation,
        backgroundBlurAmount,
        edgeBlurAmount,
        flipHorizontal
      );
    } else {
      var tempCanvas = document.createElement("canvas");
      tempCanvas.height = videoCanvas.height;
      tempCanvas.width = videoCanvas.width;
      var tempContext = tempCanvas.getContext("2d");

      tempContext.drawImage(myVideoVirtual, 0, 0, width, height);
      var imageData = tempContext.getImageData(0, 0, width, height);

      var pixel = imageData.data;
      for (var p = 0; p < pixel.length; p += 4) {
        if (segmentation.data[p / 4] == 0) {
          pixel[p + 3] = 0;
        }
      }
      tempContext.imageSmoothingEnabled = true;
      tempContext.putImageData(imageData, 0, 0);

      var imageObject = new Image();
      imageObject.onload = function () {
        videoContext.clearRect(0, 0, videoCanvas.width, videoCanvas.height);
        videoContext.imageSmoothingEnabled = true;
        videoContext.drawImage(
          imageObject,
          0,
          0,
          videoCanvas.width,
          videoCanvas.height
        );
      };
      imageObject.src = tempCanvas.toDataURL();
    }
  }
  running = false;
}
