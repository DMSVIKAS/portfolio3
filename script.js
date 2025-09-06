// =============================
// Typing Effect
// =============================
// =============================
// Typing Effect (Fixed)
// =============================
const roles = ["Web Developer", "ML Expert", "Embedded Engineer"];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const roleText = document.getElementById("role-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // typing forward
    roleText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      // pause when word fully typed
      isDeleting = true;
      setTimeout(typeEffect, 1500); // wait 1.5s before deleting
      return;
    }
  } else {
    // deleting backward
    roleText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // next word
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120); // speed: 120ms typing, 80ms deleting
}

typeEffect();



// =============================
// Counter Animation
// =============================
const counters = document.querySelectorAll('.counter');
const speed = 100;

function animateCounter(counter) {
  const targetText = counter.getAttribute('data-target');
  const hasPlus = targetText.includes('+');
  const target = counter.dataset.number ? +counter.dataset.number : parseInt(targetText);

  function updateCount() {
    const count = +counter.innerText.replace('+', '');
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment + (hasPlus ? '+' : '');
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = hasPlus ? target + '+' : target;
    }
  }
  updateCount();
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));


// =============================
// Linear Progress Bars
// =============================
const progressSpans = document.querySelectorAll('.progress span');

const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.dataset.width;
      bar.style.width = targetWidth + "%";
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

progressSpans.forEach(span => {
  span.style.width = "0%"; // reset before animation
  progressObserver.observe(span);
});


// =============================
// Circle Progress Bars
// =============================
const circleSkills = document.querySelectorAll('.circle-skill');

circleSkills.forEach(skill => {
  const percent = parseInt(skill.dataset.percent);
  const circle = skill.querySelector('.progress-ring-circle');
  const percentText = skill.querySelector('.percent'); 
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = circumference;
  percentText.textContent = "0%"; // reset

  function animateCircle() {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress <= percent) {
        const offset = circumference - (progress / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        percentText.textContent = progress + "%";
        progress++;
      } else {
        clearInterval(interval);
      }
    }, 15);
  }

  const circleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCircle();
        circleObserver.unobserve(skill);
      }
    });
  }, { threshold: 0.5 });

  circleObserver.observe(skill);
});


// =============================
// Language Progress Bars
// =============================
const langBars = document.querySelectorAll('.lang-bar span');

const langObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.dataset.width;
      bar.style.width = targetWidth + "%";
      langObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

langBars.forEach(bar => {
  bar.style.width = "0%"; // reset before animation
  langObserver.observe(bar);
});


// =============================
// Timeline Animation
// =============================
const items = document.querySelectorAll('.timeline, .timeline-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));


// =============================
// Project Filter
// =============================
const filterButtons = document.querySelectorAll(".filter-tags button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    projectCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// =============================
// Modal Handling (Safe)
// =============================
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) {
      console.error("Modal not found:", id);
      return;
    }
    modal.style.display = "flex";
  }
  
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  window.addEventListener("click", function (e) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
  // Certificate filtering
const certCards = document.querySelectorAll(".cert-card");
const certButtons = document.querySelectorAll("#certifications .filter-tags button");

certButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    certButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    certCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// =============================
// Active Navbar Highlight on Scroll
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".top-nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // offset for header
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

