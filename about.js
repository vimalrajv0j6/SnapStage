// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Chat Widget Interaction
document.querySelector('.chat-btn').addEventListener('click', () => {
  alert("Let's chat! Redirecting to WhatsApp...");
  // window.location.href = "https://wa.me/yournumber";
});
const slider = document.getElementById("profileSlider");
const imageWidth = 170; // image + gap
let scrollAmount = 0;
let scrollInterval = null;

function scrollNext() {
  scrollAmount += imageWidth;
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0; // loop back
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
}

// Start scrolling on mouseenter or touchstart
function startScroll() {
  if (!scrollInterval) {
    scrollInterval = setInterval(scrollNext, 1000);
  }
}

// Stop scrolling on mouseleave or touchend
function stopScroll() {
  clearInterval(scrollInterval);
  scrollInterval = null;
}

slider.addEventListener("mouseenter", startScroll);
slider.addEventListener("mouseleave", stopScroll);
slider.addEventListener("touchstart", startScroll);
slider.addEventListener("touchend", stopScroll);
