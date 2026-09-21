/**
 * ==========================================================================
 * Mohit's Portfolio - Main JavaScript
 * Focus: Aspiring AI Security Engineer (1st Year AI & DS)
 * Description: Interactive features including mobile navigation toggle,
 *              scrollspy navigation highlighting, dynamic navbar shadow,
 *              contact form validation & feedback, and smooth scrolling.
 * ==========================================================================
 */

// Wait for the DOM content to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------------------------------------
  // 1. DOM Element Selectors
  // ------------------------------------------------------------------------
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");
  const navbar = document.getElementById("navbar");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  // ------------------------------------------------------------------------
  // 2. Mobile Menu Toggle
  // ------------------------------------------------------------------------
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ------------------------------------------------------------------------
  // 3. Close Mobile Menu When a Navigation Link is Clicked
  // ------------------------------------------------------------------------
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // ------------------------------------------------------------------------
  // 4. Scrollspy & Dynamic Navbar Shadow
  // ------------------------------------------------------------------------
  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPosition = window.scrollY + 120;

    // Detect which section is currently in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active class on matching navigation links
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active");
      }
    });

    // Add elevated shadow to navbar when scrolled past top
    if (window.scrollY > 30) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // ------------------------------------------------------------------------
  // 5. Contact Form Submission Handler (Demo Validation & Feedback)
  // ------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const message = document.getElementById("senderMsg").value.trim();

      // Check required input fields
      if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "#f87171";
        return;
      }

      // Display friendly placeholder response
      formStatus.textContent = `Thank you, ${name}! Your message has been sent (Demo).`;
      formStatus.style.color = "#38bdf8";

      // Reset form fields
      contactForm.reset();

      // Clear the status message automatically after 4 seconds
      setTimeout(() => {
        formStatus.textContent = "";
      }, 4000);
    });
  }

  // ------------------------------------------------------------------------
  // 6. Smooth Scroll Fallback Helper
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 7. Interactive Hover Logging & Initialization
  // ------------------------------------------------------------------------
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      console.log(`Viewing project card #${index + 1}`);
    });
  });

  console.log("Mohit's Portfolio Loaded Successfully.");
  console.log("Target Role: AI Security Engineer | Track: 1st Year AI & DS");
  console.log("Interactive portfolio scripts initialized.");
});
