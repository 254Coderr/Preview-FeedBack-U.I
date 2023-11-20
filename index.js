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
}
 
// Function to read text content aloud
function readResponseAloud(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  
 // Find a male voice based on language or name
 const maleVoices = voices.filter((voice) => {
  return voice.name.toLowerCase().includes('male') && voice.lang.includes('en');
  // You might need to adjust the language code 'en' based on the available voices
});

if (maleVoices.length > 0) {
  speech.voice = maleVoices[0];
}

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 0.8;

  speechSynthesis.speak(speech);
}


