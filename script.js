const API_URL = "http://localhost:4000";

async function fetchPuppies() {
  const res = await fetch(`${API_URL}/puppies`);
  const puppies = await res.json();
  renderPuppies(puppies);
}

async function cheer(id) {
  const res = await fetch(`${API_URL}/puppies/${id}/cheer`, {
    method: "POST",
  });
  const updated = await res.json();
  document.getElementById(`score-${id}`).textContent = `Cheers: ${updated.score}`;
}

function renderPuppies(puppies) {
  const grid = document.getElementById("puppy-grid");
  grid.innerHTML = "";

  puppies.forEach((puppy) => {
    const card = document.createElement("div");
    card.className = "puppy-card";

    card.innerHTML = `
      <h2>${puppy.name}</h2>
      <img src="${puppy.imageUrl}" alt="${puppy.name}" />
      <p>Breed: ${puppy.breed}</p>
      <p>Team: ${puppy.team}</p>
      <p id="score-${puppy.id}">Cheers: ${puppy.score}</p>
    `;

    const button = document.createElement("button");
    button.textContent = "Cheer 🎉";
    button.addEventListener("click", () => cheer(puppy.id));

    card.appendChild(button);
    grid.appendChild(card);
  });
}

fetchPuppies();

  