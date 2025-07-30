document.addEventListener("DOMContentLoaded", () => {
  const sidenav = document.querySelector(".side-navbar");
  const menu = document.querySelector(".navbar-menu-toggle");
  const cancel = document.getElementById("cancel");

  menu.addEventListener("click", () => {
    sidenav.style.left = "0";
  });

  cancel.addEventListener("click", () => {
    sidenav.style.left = "-60%";
  });

  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Booking submitted successfully!");
      form.reset();
    });
  }
});
const bar = document.getElementById("bar");
const sidebar = document.querySelector(".side-navbar");
const cancel = document.getElementById("cancel");

bar.addEventListener("click", () => {
  sidebar.style.right = "0";
});

cancel.addEventListener("click", () => {
  sidebar.style.right = "-250px";
});
