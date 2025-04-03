const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-10-12T00:00:00').getTime();
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = 'Ci siamo! 💍';
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `Mancano ${days} giorni, ${hours} ore, ${minutes} minuti e ${seconds} secondi al grande giorno!`;
}, 1000);
