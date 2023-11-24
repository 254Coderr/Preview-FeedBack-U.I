const ratingEls = document.querySelectorAll(".rating");// Selects all elements with the class "rating"
const btnEl = document.getElementById("btn");// Gets the element with the ID "btn"
const containerEl = document.getElementById("container");// Gets the element with the ID "container"
const speechSynthSupported = 'speechSynthesis' in window;// Checks if the browser supports Speech Synthesis


let selectedRating = "";// Keeps track of the selected rating

ratingEls.forEach((ratingEl) => {// Loops through all rating elements
  ratingEl.addEventListener("click", (event) => {// Adds an event listener for each rating element
    try {// Try block to handle potential errors

    removeActive();// Removes the "active" class from all rating elements
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;// Gets the selected rating text
    event.target.classList.add("active"); // Adds the "active" class to the selected rating element
    event.target.parentNode.classList.add("active");// Adds the "active" class to the parent of the selected rating element
  } catch (error) { // Catch block to handle errors
    console.log('Error occurred,Check Connection:', error); // Logs the error message
   }
  });
});

btnEl.addEventListener("click", () => {// Adds an event listener for the "btn" element
  try {// Try block to handle potential errors

    
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Hujambo,Thank you for the feedback!</strong>
        <br>
        <br>
        <strong><em>Feedback: ${selectedRating}</em></strong>
        <br>
        <p>Your feedback will be used to improve our customer support and user experience.</p>
        `;
        
      // Read the response aloud if the browser supports Speech Synthesis
      if (speechSynthSupported) {// Checks if a rating has been selected
        readResponseAloud(containerEl.innerText);
      }
  }
} catch (error) {
    console.log('Error occurred,Check Connection:', error); 
  
}
});

function removeActive() {
  try {
  
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
} catch (error) {
  console.log('Error occurred,Check your Connection:', error); 
}
}g

function readResponseAloud(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1; // Adjust pitch as desired

  const voices = speechSynthesis.getVoices();

  // Find a male voice
  const maleVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));

  // Use a male voice if available, otherwise use the default voice
  speech.voice = maleVoice || voices[0];

  speechSynthesis.speak(speech);
}