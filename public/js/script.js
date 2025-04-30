// Loading screen
document.addEventListener("DOMContentLoaded", function () {
  // Show loading screen initially
  const loadingScreen = document.getElementById("loadingScreen");

  // Hide loading screen after 1 second (simulate loading)
  setTimeout(() => {
    loadingScreen.classList.add("hidden");

    // Remove from DOM after animation completes
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 1000);

  // Handle page transitions
  const links = document.querySelectorAll('a:not([href^="#"])');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Don't intercept if it's an external link or anchor link
      if (this.href && this.href.includes(window.location.hostname)) {
        e.preventDefault();

        // Show loading screen
        loadingScreen.style.display = "flex";
        loadingScreen.classList.remove("hidden");

        // Navigate after a brief delay to allow loading screen to show
        setTimeout(() => {
          window.location.href = this.href;
        }, 100);
      }
    });
  });

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.querySelector("i").classList.toggle("fa-bars");
      this.querySelector("i").classList.toggle("fa-times");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Account for fixed navbar
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const submitText = document.getElementById("submitText");
      const submitSpinner = document.getElementById("submitSpinner");
      const alert = document.getElementById("alert");
      const alertMessage = document.getElementById("alertMessage");
      const closeAlert = document.getElementById("closeAlert");

      // Show loading state
      submitBtn.classList.add("loading");

      // Simulate form submission
      fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Hide loading state
          submitBtn.classList.remove("loading");

          // Show success message
          alertMessage.textContent = data.message;
          alert.classList.remove("hidden");
          alert.classList.add("show");

          // Reset form
          contactForm.reset();

          // Auto-hide alert after 5 seconds
          setTimeout(() => {
            alert.classList.remove("show");
            setTimeout(() => {
              alert.classList.add("hidden");
            }, 300);
          }, 5000);
        })
        .catch((error) => {
          console.error("Error:", error);
          submitBtn.classList.remove("loading");
          alertMessage.textContent =
            "Failed to send message. Please try again.";
          alert.classList.remove("hidden");
          alert.classList.add("show");
        });
    });

    // Close alert button
    const closeAlert = document.getElementById("closeAlert");
    if (closeAlert) {
      closeAlert.addEventListener("click", function () {
        const alert = document.getElementById("alert");
        alert.classList.remove("show");
        setTimeout(() => {
          alert.classList.add("hidden");
        }, 300);
      });
    }
  }
});
