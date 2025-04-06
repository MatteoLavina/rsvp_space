// Imposta la data del tuo matrimonio qui:
const eventDate = new Date('2025-10-25T15:00:00').getTime();

function pad(num) {
  return num.toString().padStart(2, '0');
}

function animateCircle(id) {
  const element = document.getElementById(id).parentElement;
  element.classList.add('animate__animated', 'animate__pulse');
  setTimeout(() => {
    element.classList.remove('animate__animated', 'animate__pulse');
  }, 500);
}

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = 'Oggi è il grande giorno! 🎉';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);

  // Optional: pulse animation each second
  animateCircle("seconds");

}, 1000);