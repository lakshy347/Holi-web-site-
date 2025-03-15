const button = document.getElementById('colorButton');
const blast = document.getElementById('colorBlast');

button.addEventListener('click', () => {
  for (let i = 0; i < 30; i++) {
    createColorBlast();
  }
});

function createColorBlast() {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '10px';
  particle.style.height = '10px';
  particle.style.borderRadius = '50%';
  particle.style.background = getRandomColor();
  particle.style.top = `${Math.random() * window.innerHeight}px`;
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  blast.appendChild(particle);
  
  setTimeout(() => particle.remove(), 2000);
}

function getRandomColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFFF33'];
  return colors[Math.floor(Math.random() * colors.length)];
}
// बैकग्राउंड बदलने के लिए
document.body.addEventListener('click', () => {
  document.body.style.background = getRandomGradient();
});

// रैंडम ग्रेडिएंट फंक्शन
function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(to right, ${color1}, ${color2})`;
}
button.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    createBalloon();
  }
});

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.background = getRandomColor();
  balloon.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(balloon);
  
  setTimeout(() => balloon.remove(), 4000);
}
const headerText = document.querySelector('h1');

setInterval(() => {
  headerText.style.color = getRandomColor();
}, 500);
function toggleAbout() {
  var aboutSection = document.getElementById("about-section");
  if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
}