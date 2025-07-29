// creating Responsive hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUL.classList.toggle("show");
});
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    hamburger.classList.toggle("active");
    navUL.classList.toggle("show");
  }
});

// Scroll reveal animations
const sections = document.querySelectorAll("section");
const reveal = () => {
  sections.forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Sticky header on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Counters
const counters = document.querySelectorAll(".counter span");
let countersRun = false;
const runCounters = () => {
  counters.forEach((counter) => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(update, 10);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};
window.addEventListener("scroll", () => {
  if (
    !countersRun &&
    document.querySelector(".about").getBoundingClientRect().top <
    window.innerHeight
  ) {
    runCounters();
    countersRun = true;
  }
});

// Testimonial slider
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let index = 0;
const showTestimonial = (i) => {
  testimonials.forEach((t, idx) => {
    t.classList.toggle("active", idx === i);
    dots[idx].setAttribute("aria-selected", idx === i);
    dots[idx].tabIndex = idx === i ? 0 : -1;
  });
  index = i;
};
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showTestimonial(i));
  dot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showTestimonial(i);
    }
  });
});
setInterval(
  () => showTestimonial((index + 1) % testimonials.length),
  6000
);

// Typing animation for hero subtitle
const typingTexts = [
  "Empowering Young Minds",
  "Innovate. Learn. Grow.",
  "Your Future Begins Here",
];
let typingIndex = 0;
const typingElement = document.getElementById("typing-text");

const typeWriter = (text, i = 0) => {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 150);
  } else {
    setTimeout(() => eraseText(), 2500);
  }
};
const eraseText = () => {
  if (typingElement.textContent.length > 0) {
    typingElement.textContent = typingElement.textContent.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    typingIndex = (typingIndex + 1) % typingTexts.length;
    typeWriter(typingTexts[typingIndex]);
  }
};
window.addEventListener("load", () => {
  typeWriter(typingTexts[typingIndex]);
});