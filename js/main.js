let profile_photo = document.getElementById('profile-photo');
let photo = document.getElementById('photo');
let file = document.getElementById('file');

if( file !=null){
  file.onchange = ()=>{
    let choosedFile = file.files[0];
    if(choosedFile){
      let reader = new FileReader();
      reader.onload = ()=>{
        photo.setAttribute('src' , reader.result);
      }
      reader.readAsDataURL(choosedFile);
    }
  }
}



/*=========navbar============*/

// Get the toggler element and controls element from the DOM
const toggler = document.getElementById('toggler');
const controls = document.getElementById('controls');

// Get the open and close icons for toggling visibility
const openIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-close');

// Check if the toggler element exists
if (toggler !== null) {
  // Add a click event listener to the toggler element
  toggler.addEventListener('click', () => {
    // Toggle the 'active' class on the controls element
    controls.classList.toggle('active');

    // Toggle the visibility of the open and close icons
    openIcon.classList.toggle('d-none');
    closeIcon.classList.toggle('d-none');
  });
}


/*==========navbar============*/


/*====== video ========*/

// Get references to the video element, play button, and pause button
const video = document.querySelector('#video');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');

// Function to handle the play button click event
function handlePlayClick() {
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
  video.play();
}

// Function to handle the pause button click event
function handlePauseClick() {
  pauseButton.style.display = 'none';
  playButton.style.display = 'block';
  video.pause();
}

// Add click event listeners to the play and pause buttons
playButton.addEventListener('click', handlePlayClick);
pauseButton.addEventListener('click', handlePauseClick);

/*====== video ========*/


/*======= increment and decrement ======*/

/*
==============================================================================================
===== this code we will use it in many things after edit it it is basic code for counter =====
==============================================================================================
*/

// initialize the counter
let counter = 0;

// get elements
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Function to update the counter value and display
function updateCounter(value) {
  counter += value;
  
  // Make sure the counter does not go below 0
  if (counter < 0) {
    counter = 0;
  }
  
  countElement.innerHTML = counter;
}

// Add event listeners for the increment and decrement buttons
incrementButton.addEventListener('click', () => {
  updateCounter(1); // Increment the counter by 1
});

decrementButton.addEventListener('click', () => {
  updateCounter(-1); // Decrement the counter by 1
});

/*======= increment and decrement ======*/


