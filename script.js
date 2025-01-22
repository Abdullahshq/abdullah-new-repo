// Sample dynamic content (replace with API/data later)
const characters = [
    { name: "Zappy", power: "Lightning", image: "https://via.placeholder.com/150" },
    { name: "Flameo", power: "Fire", image: "https://via.placeholder.com/150" },
];

const container = document.getElementById("characters");

characters.forEach(char => {
    const div = document.createElement("div");
    div.className = "character";
    div.innerHTML = `
        <img src="${char.image}" alt="${char.name}">
        <h2>${char.name}</h2>
        <p>Power: ${char.power}</p>
    `;
    container.appendChild(div);
});
