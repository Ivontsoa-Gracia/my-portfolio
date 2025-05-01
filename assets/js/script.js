// Charger navbar.html dynamiquement
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    if (burger && navLinks) {
      burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }

    // Effet scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'scrolled-up');
      } else {
        navbar.classList.remove('scrolled', 'scrolled-up');
      }
    });
  })
  .catch(error => console.log('Erreur de chargement de navbar.html:', error));

// Charger about.html
fetch('about.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('about').innerHTML = data;

    if (typeof startProgressBars === 'function') {
      startProgressBars();
    }
  })
  .catch(error => console.log('Erreur de chargement de about.html:', error));

// Charger projects.html
fetch('projects.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('projects').innerHTML = data;
  })
  .catch(error => console.log('Erreur de chargement de projects.html:', error));

// Charger contact.html
fetch('contact.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('contact').innerHTML = data;
  })
  .catch(error => console.log('Erreur de chargement de contact.html:', error));

// Charger footer.html
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    const scanText = document.querySelector('.scan-text');
    if (scanText) {
      scanText.setAttribute('data-text', scanText.innerText);
    }
  })
  .catch(error => console.log('Erreur de chargement de footer.html:', error));

// Effet de typing dynamique
const phrases = ["I'm designer", "I'm developer"];
const el = document.getElementById("typing-text");

if (el) {
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    el.textContent = currentPhrase.slice(0, letterIndex);

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      speed = 1000;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 200;
    } else {
      speed = isDeleting ? 50 : 100;
    }

    letterIndex += isDeleting ? -1 : 1;
    setTimeout(type, speed);
  }

  type();
}

function scrollProjects(direction) {
  const container = document.querySelector('.card-container');
  const scrollAmount = container.offsetWidth * 0.8;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });

  setTimeout(() => {
    const scrollLeft = container.scrollLeft;
    const prevBtn = document.querySelector('.scroll-prev');
    const nextBtn = document.querySelector('.scroll-next');

    if (scrollLeft <= 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }

    if (scrollLeft >= maxScrollLeft - 5) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }, 400); // attendre la fin du scroll
}
