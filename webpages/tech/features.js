document.addEventListener('DOMContentLoaded', () => {
  // Contador de oferta
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    // Obtener deadline del localStorage o crear uno nuevo
    let deadline = localStorage.getItem('offerDeadline');
    if (!deadline) {
      deadline = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      localStorage.setItem('offerDeadline', deadline);
    }

    function updateCountdown() {
      const now = new Date();
      const diff = new Date(deadline) - now;
      
      if (diff <= 0) {
        countdownEl.innerHTML = '<span class="time-block">00</span>:<span class="time-block">00</span>:<span class="time-block">00</span>';
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.innerHTML = `
        <span class="time-block">${String(hours).padStart(2, '0')}</span>:
        <span class="time-block">${String(minutes).padStart(2, '0')}</span>:
        <span class="time-block">${String(seconds).padStart(2, '0')}</span>
      `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Chat Widget
  const chatToggle = document.getElementById('chatToggle');
  const chatWidget = document.getElementById('chatWidget');
  const chatClose = document.getElementById('chatClose');

  if (chatToggle && chatWidget && chatClose) {
    chatToggle.addEventListener('click', () => {
      chatWidget.classList.toggle('hidden');
    });

    chatClose.addEventListener('click', () => {
      chatWidget.classList.add('hidden');
    });
  }
});
