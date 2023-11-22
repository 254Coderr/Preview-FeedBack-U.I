const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
const speechSynthSupported = 'speechSynthesis' in window;



let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    try {

    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  } catch (error) {
    console.log('Error occurred,Check Connection:', error); 
   }
  });
});

btnEl.addEventListener("click", () => {
  try {
    
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
      if (speechSynthSupported) {
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
  speech.pitch = 0.8; // Adjust pitch as desired

  const voices = speechSynthesis.getVoices();

  // Find a male voice
  const maleVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));

  // Use a male voice if available, otherwise use the default voice
  speech.voice = maleVoice || voices[0];

  speechSynthesis.speak(speech);
}