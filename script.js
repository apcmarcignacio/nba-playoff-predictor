let teams = [];
const container = document.getElementById("teamContainer");

fetch("predictions.json")
    .then(response => response.json())
    .then(data => {
        teams = data.teams;
        showDivision("Atlantic"); // default division
    })
    .catch(error => {
        console.error("Error loading predictions:", error);
    });

function showDivision(division) {
    container.innerHTML = "";

    const filtered = teams.filter(team => team.division === division);

    filtered.forEach(team => {
        const card = document.createElement("div");
        card.classList.add("team-card");

        card.innerHTML = `
            <img src="${team.logo}" class="team-logo">
            <h3>${team.name}</h3>
            <div class="probability">${team.probability}%</div>
            <p>Chance to Make Playoffs</p>
        `;

        container.appendChild(card);
    });
}
