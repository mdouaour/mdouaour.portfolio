/* ===========================
   script.js – Portfolio interactivity
   =========================== */

// Navbar scroll effect
(function () {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Scroll reveal
(function () {
  var targets = document.querySelectorAll(
    '.about-text, .about-facts, .fact-card, .skill-group, .project-card, .contact-card'
  );

  targets.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      var stagger = 0;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, stagger * 60);
          stagger++;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

// Animated number counters (Results section)
(function () {
  var cards = document.querySelectorAll('.result-card');

  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var card = entry.target;
          var target = parseInt(card.dataset.target, 10);
          var countEl = card.querySelector('[data-count]');
          animateCounter(countEl, target, 1200);
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.4 }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();

// Active nav link highlight on scroll
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
