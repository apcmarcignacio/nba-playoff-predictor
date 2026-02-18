const teams = [
    { name: "Boston Celtics", division: "Atlantic", logo: "https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg", probability: 92 },
    { name: "Milwaukee Bucks", division: "Central", logo: "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg", probability: 88 },
    { name: "Miami Heat", division: "Southeast", logo: "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg", probability: 75 },
    { name: "Los Angeles Lakers", division: "Pacific", logo: "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg", probability: 85 },
    { name: "Denver Nuggets", division: "Northwest", logo: "https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg", probability: 90 },
    { name: "Dallas Mavericks", division: "Southwest", logo: "https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg", probability: 82 }
];

const container = document.getElementById("teamContainer");

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

// Load default division
showDivision("Atlantic");
