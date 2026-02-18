const container = document.getElementById("teamContainer");

let predictions = {};

fetch("predictions.json")
    .then(response => response.json())
    .then(data => {
        predictions = data;
        showDivision("Atlantic"); // default
    })
    .catch(error => {
        console.error("Error loading predictions:", error);
    });

function showDivision(division) {
    container.innerHTML = "";

    const teams = predictions[division];

    if (!teams) return;

    teams.forEach(team => {
        const card = document.createElement("div");
        card.classList.add("team-card");

        const percentage = (team.playoff_probability * 100).toFixed(1);

        card.innerHTML = `
            <h3>${team.team}</h3>
            <div class="probability">${percentage}%</div>
            <p>Chance to Make Playoffs</p>
        `;

        container.appendChild(card);
    });
}
