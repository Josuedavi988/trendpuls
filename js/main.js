document.querySelectorAll(".video-wrapper").forEach(wrapper => {
  const video = wrapper.querySelector("video");
  const playBtn = wrapper.querySelector(".play-btn");

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "❚❚";
    } else {
      video.pause();
      playBtn.textContent = "▶";
    }
  });

  video.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
});


const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animate);
  }

  animate();


  
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const offset = 50; // 👈 change this if needed
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});


//animated
AOS.init();


const heroVideo = document.querySelector('[data-hero-video]');
if (heroVideo) {
  const minWidth = 560;
  const maxWidth = 1040;
  let ticking = false;

  const applyWidth = () => {
    if (window.innerWidth <= 768) {
      heroVideo.style.width = '100%';
      ticking = false;
      return;
    }

    const maxScroll = Math.max(window.innerHeight * 0.35, 280);
    const progress = Math.min(window.scrollY / maxScroll, 1);
    const targetWidth = minWidth + (maxWidth - minWidth) * progress;
    heroVideo.style.width = `${Math.round(targetWidth)}px`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(applyWidth);
      ticking = true;
    }
  };

  applyWidth();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', applyWidth);
}
