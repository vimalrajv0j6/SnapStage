// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Chat Widget Interaction
document.querySelector('.chat-btn').addEventListener('click', () => {
  alert("Let's chat! Redirecting to WhatsApp...");
  // window.location.href = "https://wa.me/yournumber";
});