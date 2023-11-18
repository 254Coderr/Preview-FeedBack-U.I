const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");


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


