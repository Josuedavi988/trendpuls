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

const menuOverlay = document.getElementById('menuOverlay');
const menuToggles = document.querySelectorAll('[data-menu-toggle]');
if (menuOverlay && menuToggles.length) {
  const setMenuOpen = (open) => {
    document.body.classList.toggle('menu-open', open);
    menuOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuToggles.forEach((btn) => btn.setAttribute('aria-expanded', open ? 'true' : 'false'));
  };

  menuToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = document.body.classList.contains('menu-open');
      setMenuOpen(!isOpen);
    });
  });

  menuOverlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  });
}

const mainHeader = document.getElementById('main2Nav');
if (mainHeader) {
  const hideThreshold = 320;
  const setHeaderState = () => {
    const scrollY = window.scrollY;
    mainHeader.classList.toggle('header-scrolled', scrollY > 10);
    if (scrollY === 0) {
      mainHeader.classList.remove('header-hidden');
    } else if (scrollY > hideThreshold) {
      mainHeader.classList.add('header-hidden');
    }
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
}

const leadForm = document.getElementById('leadForm');
const leadTeaser = document.getElementById('leadTeaser');
const leadUnlocked = document.getElementById('leadUnlocked');
const leadModal = document.getElementById('leadModal');
const leadOpeners = document.querySelectorAll('[data-lead-open]');
const leadClosers = document.querySelectorAll('[data-lead-close]');

const toggleLeadModal = (open) => {
  if (!leadModal) return;
  leadModal.classList.toggle('is-visible', open);
  leadModal.setAttribute('aria-hidden', open ? 'false' : 'true');
};

if (leadModal) {
  leadOpeners.forEach((btn) => btn.addEventListener('click', (event) => {
    if (btn.tagName === 'A') {
      event.preventDefault();
    }
    toggleLeadModal(true);
  }));
  leadClosers.forEach((btn) => btn.addEventListener('click', () => toggleLeadModal(false)));
  leadModal.addEventListener('click', (event) => {
    if (event.target === leadModal) {
      toggleLeadModal(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggleLeadModal(false);
    }
  });
}

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      return;
    }
    const formData = new FormData(leadForm);
    const firstName = (formData.get('firstName') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const rawPhone = (formData.get('phone') || '').toString().trim();
    const countryCode = (formData.get('countryCode') || '+41').toString().trim();
    const normalizePhone = (value) => {
      const trimmed = value.trim();
      if (!trimmed) {
        return '';
      }
      const digits = trimmed.replace(/\D/g, '');
      if (!digits) {
        return '';
      }
      if (trimmed.startsWith('+')) {
        return `+${digits}`;
      }
      if (digits.startsWith('00')) {
        return `+${digits.slice(2)}`;
      }
      const normalizedCode = countryCode.startsWith('+') ? countryCode : `+${countryCode}`;
      const codeDigits = normalizedCode.replace(/\D/g, '');
      if (digits.startsWith('0')) {
        return `+${codeDigits}${digits.slice(1)}`;
      }
      if (digits.startsWith(codeDigits)) {
        return `+${digits}`;
      }
      return `+${codeDigits}${digits}`;
    };
    const phone = normalizePhone(rawPhone);

    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);

    toggleLeadModal(false);
    window.location.href = 'signal-strategy.html';
  });
}
