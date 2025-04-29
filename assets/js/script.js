 // Charger navbar.html dynamiquement
 fetch('navbar.html')
 .then(response => response.text())
 .then(data => {
   document.getElementById('navbar-container').innerHTML = data;

   // Attacher le toggle du menu burger
   const burger = document.getElementById('burger');
   const navLinks = document.getElementById('navLinks');
   const navbar = document.querySelector('.navbar');

   if (burger && navLinks) {
     burger.addEventListener('click', () => {
       navLinks.classList.toggle('open');
     });
   }

   // Effet scroll après que la navbar soit chargée
   window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
       navbar.classList.add('scrolled');
       navbar.classList.add("scrolled-up");
     } else {
       navbar.classList.remove('scrolled');
       navbar.classList.remove('scrolled-up');
     }
   });
 });

// Charger about.html dynamiquement dans la section #about
fetch('about.html')
 .then(response => response.text())
 .then(data => {
   document.getElementById('about').innerHTML = data;

   // Lancer l'animation des barres de progression après que le contenu about.html soit chargé
   startProgressBars();
 })
 .catch(error => console.log('Erreur de chargement de about.html:', error));

fetch('projects.html')
.then(response => response.text())
.then(data => {
  document.getElementById('projects').innerHTML = data;
  
})
.catch(error => console.log('Erreur de chargement de about.html:', error));

fetch('contact.html')
.then(response => response.text())
.then(data => {
  document.getElementById('contact').innerHTML = data;
  
})
.catch(error => console.log('Erreur de chargement de about.html:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
  
})
.catch(error => console.log('Erreur de chargement de about.html:', error));

const phrases = ["I'm designer", "I'm developer"];
const el = document.getElementById("typing-text");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let speed = 100;

function type() {
 const currentPhrase = phrases[phraseIndex];

 if (isDeleting) {
   letterIndex--;
 } else {
   letterIndex++;
 }

 el.textContent = currentPhrase.slice(0, letterIndex);

 if (!isDeleting && letterIndex === currentPhrase.length) {
   isDeleting = true;
   speed = 1000; // pause avant suppression
 } else if (isDeleting && letterIndex === 0) {
   isDeleting = false;
   phraseIndex = (phraseIndex + 1) % phrases.length;
   speed = 200; // petite pause avant de réécrire
 } else {
   speed = isDeleting ? 50 : 100;
 }

 setTimeout(type, speed);
}

type();

// Fonction pour animer les barres de progression
function startProgressBars() {
 const progressBars = document.querySelectorAll('.progress');
 progressBars.forEach(bar => {
   const targetValue = bar.dataset.value;
   let currentWidth = 0;
   const targetWidth = parseInt(targetValue);
   const interval = setInterval(() => {
     if (currentWidth < targetWidth) {
       currentWidth++;
       bar.style.width = currentWidth + "%";
       bar.parentNode.querySelector('.percentage').textContent = currentWidth + "%";
     } else {
       clearInterval(interval);
     }
   }, 10);
 });
}