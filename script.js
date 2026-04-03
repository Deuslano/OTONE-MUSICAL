// Inicializa AOS animações
AOS.init({ duration: 800, once: true, offset: 100 });

// Menu mobile
const toggleBtn = document.getElementById('menuToggle');
const navLinksMenu = document.getElementById('navLinks');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => navLinksMenu.classList.toggle('show'));
}

// Música ambiente
const musicControl = document.getElementById('musicControl');
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
const musicStatus = document.getElementById('musicStatus');
let musicPlaying = false;
bgMusic.load();

musicControl.addEventListener('click', function () {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicIcon.className = 'fas fa-music-slash';
    musicStatus.innerText = 'Música pausada';
  } else {
    bgMusic.play()
      .then(() => {
        musicPlaying = true;
        musicIcon.className = 'fas fa-music';
        musicStatus.innerText = 'Música ambiente';
      })
      .catch(error => {
        alert('⚠️ Clique novamente para tocar. Verifique o arquivo de música.');
      });
  }
});

// Pausar música ao reproduzir qualquer vídeo (YouTube + locais)
const allVideos = document.querySelectorAll('.youtube-video, .testimonial-video-player');
allVideos.forEach(video => {
  video.addEventListener('play', () => {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      musicIcon.className = 'fas fa-music-slash';
      musicStatus.innerText = 'Música pausada (vídeo)';
    }
  });
});

// Formulário WhatsApp
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.querySelector('input[placeholder="Seu nome"]').value;
  const email = form.querySelector('input[placeholder="E-mail"]').value;
  const tel = form.querySelector('input[placeholder="WhatsApp"]').value;
  const data = form.querySelector('input[placeholder="Data do casamento"]').value;
  const local = form.querySelector('input[placeholder="Local da cerimônia"]').value;
  const tipo = form.querySelector('select').value;
  const msg = form.querySelector('textarea').value;
  const texto = `Olá!%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Data:* ${data}%0A*Local:* ${local}%0A*Tipo:* ${tipo}%0A*Mensagem:* ${msg}`;
  window.open(`https://wa.me/553488754146?text=${texto}`, '_blank');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (navLinksMenu.classList.contains('show')) navLinksMenu.classList.remove('show');
    }
  });
});