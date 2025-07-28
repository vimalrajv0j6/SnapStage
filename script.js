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
