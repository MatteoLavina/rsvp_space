document.getElementById('number_participants').addEventListener('change', function() {
  const container = document.getElementById('additional_participants');
  container.innerHTML = ''; // clear existing fields
  const numberOfParticipants = parseInt(this.value);

  if (numberOfParticipants > 1) {
    for (let i = 2; i <= numberOfParticipants; i++) {
      container.innerHTML += `
        <div class="participant-group">
          <h4>Partecipante ${i}</h4>
          <label for="participant_${i}_name">Nome:</label>
          <input type="text" id="participant_${i}_name" name="participant_${i}_name" required />

          <label for="participant_${i}_surname">Cognome:</label>
          <input type="text" id="participant_${i}_surname" name="participant_${i}_surname" required />
        </div>
      `;
    }
  }
});// JavaScript Document