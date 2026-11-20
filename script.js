(() => {
  "use strict";
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "Close" : "Menu";
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu";
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Front-end demonstration only. No information is sent or stored.
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form && status) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const email = document.querySelector("#visitor-email");
      const consent = document.querySelector("#consent");
      if (!email || !email.checkValidity()) {
        status.textContent = "Please enter a valid email address.";
        email?.focus();
        return;
      }
      if (!consent?.checked) {
        status.textContent = "Please agree before continuing.";
        consent?.focus();
        return;
      }
      status.textContent = "Demo validation successful. No details were sent or saved. Connect a secure backend before using this form for real sign-ups.";
    });
  }
})();
