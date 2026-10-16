let storyNumber = 1;
let photoNumber = 1;

function showPhoto() {
  let photoFile;
  let photoDescription;
  let caption;
  let storyTitle;
  let storyDescription;
  let part;

  if (storyNumber === 1) {
    storyTitle = "Farther Away";
    storyDescription = "A journey from the familiar moon into a wider sky.";

    if (photoNumber === 1) {
      photoFile = "images/moon.jpg";
      photoDescription = "A close view of the moon against a black sky";
      caption = "The moon outside my window makes the night feel close.";
    } else if (photoNumber === 2) {
      photoFile = "images/star.webp";
      photoDescription = "One bright star shining among smaller stars";
      caption = "I follow one bright star beyond what I know.";
    } else {
      photoFile = "images/pleiades.jpg";
      photoDescription = "A blue cluster surrounded by many stars";
      caption = "The crowded sky makes me wonder how much more is out there.";
    }
  } else {
    storyTitle = "Finding Home";
    storyDescription = "A journey from distant stars back to something familiar.";

    if (photoNumber === 1) {
      photoFile = "images/pleiades.jpg";
      photoDescription = "A blue cluster surrounded by many stars";
      caption = "Among so many distant stars, I feel far from home.";
    } else if (photoNumber === 2) {
      photoFile = "images/star.webp";
      photoDescription = "One bright star shining among smaller stars";
      caption = "One bright star gives me a point to follow.";
    } else {
      photoFile = "images/moon.jpg";
      photoDescription = "A close view of the moon against a black sky";
      caption = "The familiar moon reminds me that home is still close.";
    }
  }

  if (photoNumber === 1) {
    part = "Beginning - 1 of 3";
  } else if (photoNumber === 2) {
    part = "Middle - 2 of 3";
  } else {
    part = "End - 3 of 3";
  }

  document.getElementById("story-title").textContent = storyTitle;
  document.getElementById("story-description").textContent = storyDescription;
  document.getElementById("part").textContent = part;
  document.getElementById("photo").src = photoFile;
  document.getElementById("photo").alt = photoDescription;
  document.getElementById("caption").textContent = caption;
  document.getElementById("first-story").setAttribute("aria-pressed", storyNumber === 1);
  document.getElementById("second-story").setAttribute("aria-pressed", storyNumber === 2);
  document.getElementById("previous-photo").disabled = photoNumber === 1;
  document.getElementById("next-photo").disabled = photoNumber === 3;
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
  if (photoNumber > 1) {
    photoNumber = photoNumber - 1;
    showPhoto();
  }
});

document.getElementById("next-photo").addEventListener("click", function() {
  if (photoNumber < 3) {
    photoNumber = photoNumber + 1;
    showPhoto();
  }
});

showPhoto();
