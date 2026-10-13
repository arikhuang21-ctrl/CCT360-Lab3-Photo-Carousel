let storyNumber = 1;
let photoNumber = 1;

function showPhoto() {
  let photoFile;
  let photoDescription;
  let caption;
  let storyTitle;
  let part;

  if (storyNumber == 1) {
    storyTitle = "Farther Away";

    if (photoNumber == 1) {
      photoFile = "images/moon.jpg";
      photoDescription = "The moon in a dark sky";
      caption = "I start with the moon outside my window.";
    } else if (photoNumber == 2) {
      photoFile = "images/star.webp";
      photoDescription = "One bright star in the night sky";
      caption = "One bright star pulls my eyes farther away.";
    } else {
      photoFile = "images/pleiades.jpg";
      photoDescription = "A blue cluster of many stars";
      caption = "I notice that the sky is much bigger than I thought.";
    }
  } else {
    storyTitle = "Finding Home";

    if (photoNumber == 1) {
      photoFile = "images/pleiades.jpg";
      photoDescription = "A blue cluster of many stars";
      caption = "A wide field of stars feels almost endless.";
    } else if (photoNumber == 2) {
      photoFile = "images/star.webp";
      photoDescription = "One bright star in the night sky";
      caption = "One bright light gives me a place to focus.";
    } else {
      photoFile = "images/moon.jpg";
      photoDescription = "The moon in a dark sky";
      caption = "The familiar moon makes the distance feel smaller.";
    }
  }

  if (photoNumber == 1) {
    part = "Beginning - 1 of 3";
  } else if (photoNumber == 2) {
    part = "Middle - 2 of 3";
  } else {
    part = "End - 3 of 3";
  }

  document.getElementById("story-title").textContent = storyTitle;
  document.getElementById("part").textContent = part;
  document.getElementById("photo").src = photoFile;
  document.getElementById("photo").alt = photoDescription;
  document.getElementById("caption").textContent = caption;
}

document.getElementById("first-story").addEventListener("click", function() {
  storyNumber = 1;
  photoNumber = 1;
  showPhoto();
});

document.getElementById("second-story").addEventListener("click", function() {
  storyNumber = 2;
  photoNumber = 1;
  showPhoto();
});

document.getElementById("previous-photo").addEventListener("click", function() {
  if (photoNumber == 1) {
    photoNumber = 3;
  } else {
    photoNumber = photoNumber - 1;
  }
  showPhoto();
});

document.getElementById("next-photo").addEventListener("click", function() {
  if (photoNumber == 3) {
    photoNumber = 1;
  } else {
    photoNumber = photoNumber + 1;
  }
  showPhoto();
});

showPhoto();
