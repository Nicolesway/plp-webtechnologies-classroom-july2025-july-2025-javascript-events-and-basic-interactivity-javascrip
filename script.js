// script.js

// ========== THEME SWITCHER ==========
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ========== FAQ TOGGLE ==========
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ========== CUSTOM FORM VALIDATION ==========
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form submission

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Username validation: must be at least 3 chars
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters.");
  }

  // Email validation: simple regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation: at least 6 characters with one number
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    errors.push("Password must be at least 6 characters long and include a number.");
  }

  // Show results
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    // Reset form fields
    form.reset();
  }
});
