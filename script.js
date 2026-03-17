/* =========================
YIN & YANG COSMIC JS
========================= */

/* -------------------------
TECHNIQUE DATA
------------------------- */
const techniques = {
1:{title:"Watch the Breath",description:"Observe your natural breathing.",animation:"breath",steps:[
"Sit comfortably with spine erect.",
"Close your eyes and take two deep breaths.",
"Breathe normally and focus on nostrils.",
"Feel air coming in (cool) and going out (warm).",
"Simply watch your breath. Do not change it.",
"Continue for 5–15 minutes."
]},
2:{title:"Observe Thoughts",description:"Watch thoughts appear and disappear.",animation:"thoughts",steps:[
"Sit comfortably and close your eyes.",
"Notice thoughts appearing in the mind.",
"Do not follow or judge them.",
"Simply observe them passing by.",
"Return attention to your breath if mind wanders.",
"Continue for 5–15 minutes."
]},
3:{title:"The Inner Witness",description:"Become aware of the observer behind the mind.",animation:"witness",steps:[
"Sit in a comfortable position.",
"Close your eyes and breathe deeply.",
"Imagine a witness observing your thoughts.",
"Do not interfere with any thought or feeling.",
"Feel yourself as the observer, not the mind.",
"Remain aware for 5–15 minutes."
]},
4:{title:"Listening Meditation",description:"Listen to sounds without judgment.",animation:"sound",steps:[
"Find a quiet space.",
"Close your eyes and focus on external sounds.",
"Shift attention to inner sounds.",
"Do not label or analyze.",
"Observe for 5–15 minutes."
]},
5:{title:"Breath Pause",description:"Observe the pause between inhale and exhale.",animation:"pause",steps:[
"Sit comfortably with eyes closed.",
"Focus on natural breathing.",
"Notice the pause at the end of exhale.",
"Do not hold the breath, just observe.",
"Continue 5–15 minutes."
]},
6:{title:"Body Awareness",description:"Scan your body sensations without judgment.",animation:"body",steps:[
"Close your eyes and focus on your feet.",
"Move attention slowly up the body.",
"Notice each body part without judgment.",
"Reverse and repeat as needed."
]},
7:{title:"Watching Emotions",description:"Observe emotions like passing clouds.",animation:"emotion",steps:[
"Notice an emotion arise.",
"Observe physical sensations.",
"Do not act or judge.",
"Feel the emotion pass naturally."
]},
8:{title:"Silent Sitting",description:"Sit in stillness and observe inner calm.",animation:"silence",steps:[
"Find a comfortable position.",
"Close eyes, breathe slowly.",
"Focus on stillness, do not move.",
"Stay aware for 5–15 minutes."
]},
9:{title:"Walking Awareness",description:"Walk slowly, feeling each step.",animation:"walk",steps:[
"Walk slowly in a quiet space.",
"Feel each step and foot movement.",
"Notice sensations in legs and body.",
"Keep attention on movement and balance."
]},
10:{title:"Cosmic Awareness",description:"Feel yourself as part of the universe.",animation:"cosmos",steps:[
"Close your eyes.",
"Imagine the vast cosmos around you.",
"Feel the connection between yourself and universe.",
"Observe sensations without judgment."
]}
};

/* -------------------------
TOGGLE STEPWISE INSTRUCTIONS
------------------------- */
document.querySelectorAll(".view-steps").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const steps = btn.nextElementSibling;
    steps.classList.toggle("active");
    btn.textContent = steps.classList.contains("active") ? "Hide Steps" : "View Steps";
  });
});

/* -------------------------
PRACTICE MODAL FUNCTIONALITY
------------------------- */
const practiceButtons = document.querySelectorAll(".practice-btn");

practiceButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const techId = btn.dataset.tech;
    openPracticeModal(techId);
  });
});

function openPracticeModal(id){
  const tech = techniques[id];

  // Remove existing modal
  document.querySelector(".practice-modal")?.remove();

  // Build steps HTML
  let stepsHTML = "<ol class='modal-steps'>";
  tech.steps.forEach((step,i)=>{
    stepsHTML += `<li data-step="${i}">${step}</li>`;
  });
  stepsHTML += "</ol>";

  // Create modal
  const modal = document.createElement("div");
  modal.classList.add("practice-modal");
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content glass">
      <div class="tech-animation ${tech.animation}"></div>
      <h2>${tech.title}</h2>
      <p>${tech.description}</p>
      ${stepsHTML}
      <div class="modal-controls">
        <button class="prev-step">⬅ Previous</button>
        <button class="next-step">Next ➡</button>
        <button class="close-modal">Close ✖</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  let currentStep = 0;
  const stepElements = modal.querySelectorAll(".modal-steps li");
  highlightStep(currentStep);

  function highlightStep(i){
    stepElements.forEach(el=>el.classList.remove("active-step"));
    stepElements[i]?.classList.add("active-step");
    stepElements[i]?.scrollIntoView({behavior:"smooth",block:"center"});
  }

  modal.querySelector(".next-step").addEventListener("click", ()=>{
    if(currentStep < stepElements.length-1) currentStep++;
    highlightStep(currentStep);
  });

  modal.querySelector(".prev-step").addEventListener("click", ()=>{
    if(currentStep>0) currentStep--;
    highlightStep(currentStep);
  });

  modal.querySelector(".close-modal").addEventListener("click", ()=>{
    modal.remove();
  });
}

/* -------------------------
COSMIC BACKGROUND
------------------------- */
const starContainer = document.querySelector(".stars");
for(let i=0;i<120;i++){
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random()*100 + "vw";
  star.style.top = Math.random()*100 + "vh";
  star.style.animationDuration = (Math.random()*3+2) + "s";
  starContainer.appendChild(star);
}

/* -------------------------
PARALLAX EFFECT
------------------------- */
window.addEventListener("mousemove",(e)=>{
  const x = e.clientX/window.innerWidth;
  const y = e.clientY/window.innerHeight;
  document.querySelector(".stars").style.transform = `translate(${x*20}px, ${y*20}px)`;
});

/* -------------------------
DYNAMIC QUOTES
------------------------- */
const quotes = [
  "Silence is the language of awareness.",
  "You are not the mind. You are the observer.",
  "Stillness reveals the universe within.",
  "Awareness transforms chaos into clarity.",
  "Within you exists an infinite cosmos."
];

const quoteBox = document.getElementById("quote");
if(quoteBox){
  setInterval(()=>{
    const rand = Math.floor(Math.random()*quotes.length);
    quoteBox.textContent = quotes[rand];
  },12000);
}

/* -------------------------
MEDITATION TIMER
------------------------- */
let timerButtons = document.querySelectorAll(".timer");
let timeDisplay = document.getElementById("time");
let countdown;

timerButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const seconds = parseInt(btn.textContent)*60;
    startTimer(seconds);
  });
});

function startTimer(seconds){
  clearInterval(countdown);
  let remaining = seconds;
  countdown = setInterval(()=>{
    let min = Math.floor(remaining/60);
    let sec = remaining%60;
    timeDisplay.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    remaining--;
    if(remaining<0){
      clearInterval(countdown);
      timeDisplay.textContent = "Meditation Complete ✨";
      new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_115b9c9b4f.mp3").play();
    }
  },1000);
}
