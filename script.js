// ===============================
// YIN & YANG COSMIC SCRIPT
// ===============================


// --------------------------------
// SMOOTH SCROLL NAVIGATION
// --------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior: 'smooth'

});

});

});



// --------------------------------
// COSMIC STAR GENERATOR
// --------------------------------

const starContainer = document.querySelector(".stars");

function createStars(){

for(let i = 0; i < 120; i++){

let star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random()*100 + "vw";

star.style.top = Math.random()*100 + "vh";

star.style.animationDuration = (Math.random()*3+2) + "s";

starContainer.appendChild(star);

}

}

createStars();



// --------------------------------
// RAIN ANIMATION GENERATOR
// --------------------------------

const rainContainer = document.querySelector(".rain");

function createRain(){

for(let i = 0; i < 150; i++){

let drop = document.createElement("span");

drop.classList.add("raindrop");

drop.style.left = Math.random()*100 + "vw";

drop.style.animationDuration = (Math.random()*1+0.5)+"s";

drop.style.animationDelay = Math.random()*2+"s";

rainContainer.appendChild(drop);

}

}

createRain();



// --------------------------------
// MEDITATION TIMER
// --------------------------------

let timerButtons = document.querySelectorAll(".timer");

let timeDisplay = document.getElementById("time");

let countdown;

timerButtons.forEach(button => {

button.addEventListener("click", ()=>{

let minutes = parseInt(button.textContent);

startTimer(minutes*60);

});

});



function startTimer(seconds){

clearInterval(countdown);

let remaining = seconds;

countdown = setInterval(()=>{

let min = Math.floor(remaining/60);

let sec = remaining % 60;

timeDisplay.textContent = 

String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0');

remaining--;

if(remaining < 0){

clearInterval(countdown);

timeDisplay.textContent = "Meditation Complete";

playBell();

}

},1000);

}



// --------------------------------
// MEDITATION COMPLETION SOUND
// --------------------------------

function playBell(){

let bell = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_115b9c9b4f.mp3");

bell.play();

}



// --------------------------------
// START JOURNEY BUTTON
// --------------------------------

let startButton = document.querySelector(".start-btn");

startButton.addEventListener("click", ()=>{

document.querySelector("#techniques").scrollIntoView({

behavior:"smooth"

});

});



// --------------------------------
// PRACTICE BUTTON INTERACTION
// --------------------------------

// PRACTICE BUTTON INTERACTION
let practiceButtons = document.querySelectorAll(".practice-btn");

practiceButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const techId = btn.dataset.tech; // get data-tech attribute
    const tech = techniques[techId];
    openPracticeModal(tech);
  });
});


// OPEN MODAL FUNCTION
function openPracticeModal(tech){
  
  // Remove existing modal if any
  let existing = document.querySelector(".practice-modal");
  if(existing) existing.remove();

  // Create modal
  let modal = document.createElement("div");
  modal.classList.add("practice-modal");

  // Steps HTML
  let stepsHTML = "<ol>";
  tech.steps.forEach(step=>{
    stepsHTML += `<li>${step}</li>`;
  });
  stepsHTML += "</ol>";

  modal.innerHTML = `
    <div class="modal-content glass">
      <div class="tech-animation ${tech.animation}"></div>
      <h2>${tech.title}</h2>
      <p>${tech.description}</p>
      ${stepsHTML}
      <button class="close-modal">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Close button
  modal.querySelector(".close-modal").addEventListener("click", ()=>{
    modal.remove();
  });
}
// --------------------------------
// PRACTICE MODAL
// --------------------------------

function openPracticeModal(title){

let modal = document.createElement("div");

modal.classList.add("practice-modal");

modal.innerHTML = `

<div class="modal-content glass">

<h2>${title}</h2>

<p>

Sit comfortably. Relax your body.  
Close your eyes and begin observing your breath.

Do not control the breath.  
Just watch it come and go naturally.

Remain aware.

</p>

<button class="close-modal">End Practice</button>

</div>

`;

document.body.appendChild(modal);

document.querySelector(".close-modal").addEventListener("click", ()=>{

modal.remove();

});

}



// --------------------------------
// COSMIC PARALLAX EFFECT
// --------------------------------

window.addEventListener("mousemove",(e)=>{

let x = e.clientX / window.innerWidth;

let y = e.clientY / window.innerHeight;

document.querySelector(".stars").style.transform = 

"translate(" + x*20 + "px," + y*20 + "px)";

});



// --------------------------------
// GLASS CARD HOVER EFFECT
// --------------------------------

let cards = document.querySelectorAll(".tech-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let rect = card.getBoundingClientRect();

let x = e.clientX - rect.left;

let y = e.clientY - rect.top;

card.style.transform = 

"rotateX(" + (-y/25) + "deg) rotateY(" + (x/25) + "deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "rotateX(0) rotateY(0)";

});

});



// --------------------------------
// RANDOM COSMIC PHILOSOPHY TEXT
// --------------------------------

const quotes = [

"Silence is the language of awareness.",

"You are not the mind. You are the observer.",

"Stillness reveals the universe within.",

"Awareness transforms chaos into clarity.",

"Within you exists an infinite cosmos."

];

let quoteBox = document.querySelector("#philosophy blockquote");

setInterval(()=>{

let random = Math.floor(Math.random()*quotes.length);

quoteBox.textContent = quotes[random];

},12000);



// --------------------------------
// COSMIC LOADING EFFECT
// --------------------------------

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});



// ===============================
// END OF SCRIPT
// ===============================
// Stepwise toggle
const stepButtons = document.querySelectorAll(".view-steps");

stepButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const steps = btn.nextElementSibling; // the <ol class="steps">
    steps.classList.toggle("active");
    btn.textContent = steps.classList.contains("active") ? "Hide Steps" : "View Steps";
  });
});
const techniques = {

1:{
  title:"Watch the Breath",
  description:"Observe the natural flow of your breathing without controlling it.",
  animation:"breath",
  steps:[
    "Sit comfortably with spine erect.",
    "Close your eyes and take two deep breaths.",
    "Breathe normally and bring attention to nostrils.",
    "Feel air coming in (cool) and going out (warm).",
    "Simply watch your breath. Do not change it.",
    "Continue for 5–15 minutes."
  ]
},

2:{
  title:"Observe Thoughts",
  description:"Watch thoughts appear and disappear without judgment.",
  animation:"thoughts",
  steps:[
    "Sit comfortably and close your eyes.",
    "Notice thoughts appearing in the mind.",
    "Do not follow or judge them.",
    "Simply observe them passing by.",
    "Return attention to your breath if mind wanders.",
    "Continue for 5–15 minutes."
  ]
},

3:{
  title:"The Inner Witness",
  description:"Become aware of the observer behind the mind.",
  animation:"witness",
  steps:[
    "Sit in a comfortable position.",
    "Close your eyes and take a deep breath.",
    "Imagine a witness observing your thoughts.",
    "Do not interfere with any thought or feeling.",
    "Feel yourself as the observer, not the mind.",
    "Remain aware for 5–15 minutes."
  ]
},

// Add techniques 4–10 similarly
};
