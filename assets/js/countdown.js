// Imposta la data del tuo matrimonio qui:
const eventDate = new Date('2025-10-25T15:00:00').getTime();
const countdownElem = document.getElementById('countdown');

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(x);
    countdownElem.innerHTML = 'Oggi è il grande giorno! ?';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElem.innerHTML = `
    Mancano 
    <strong>${days}</strong> giorni 
    <strong>${hours}</strong> ore 
    <strong>${minutes}</strong> minuti 
    <strong>${seconds}</strong> secondi
    al grande giorno!
  `;
}, 1000);