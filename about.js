document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById("slider");
 
  let scrollInterval;
  let isPaused = false;
  const scrollSpeed = 2; // Adjust speed here

  // Create navigation buttons
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
  prevBtn.className = 'slider-nav prev';
  nextBtn.className = 'slider-nav next';
  document.querySelector('.slider-wrapper').append(prevBtn, nextBtn);

  // Clone first few cards and append to end for seamless looping
  const cards = document.querySelectorAll('.team-card');
  const cloneCount = 3; // Number of cards to clone
  for (let i = 0; i < cloneCount; i++) {
    const clone = cards[i].cloneNode(true);
    slider.appendChild(clone);
  }

  // Auto-scroll with infinite loop
  function autoScroll() {
    if (!isPaused) {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      
      if (slider.scrollLeft >= maxScroll - 1) {
        // Instant (but hidden) reset to start
        slider.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        slider.scrollBy({ left: scrollSpeed, behavior: 'auto' });
      }
    }
    requestAnimationFrame(autoScroll);
  }

  // Manual navigation
  nextBtn.addEventListener('click', () => {
    const cardWidth = cards[0].offsetWidth + 30; // 30px gap
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    const cardWidth = cards[0].offsetWidth + 30;
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  // Pause controls
  slider.addEventListener("mouseenter", () => isPaused = true);
  slider.addEventListener("mouseleave", () => isPaused = false);
  slider.addEventListener('touchstart', () => isPaused = true);
  slider.addEventListener('touchend', () => isPaused = false);

  // Start auto-scroll
  autoScroll();

  // Reset position when reaching cloned items (for manual scrolling)
  slider.addEventListener('scroll', () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScroll - 100) { // 100px threshold
      setTimeout(() => {
        slider.scrollTo({ left: 0, behavior: 'instant' });
      }, 300);
    }
  });
});