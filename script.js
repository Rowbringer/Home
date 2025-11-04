// script.js - Global Interactivity

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mock Data for Games (Used on index.html and games.html) ---
    const mockGames = [
        { name: "Mega Obby World", players: "125k", imageText: "Obby Image" },
        { name: "Roleplay City 2", players: "88k", imageText: "City RP Image" },
        { name: "Survival Game X", players: "54k", imageText: "Survival Image" },
        { name: "Tycoon Empire", players: "31k", imageText: "Tycoon Image" },
        { name: "Mystery Solver", players: "19k", imageText: "Mystery Image" },
        { name: "Race Car Simulator", players: "15k", imageText: "Race Image" },
        { name: "Pet Collector 3", players: "10k", imageText: "Pets Image" },
        { name: "Building Sandbox", players: "5k", imageText: "Build Image" },
    ];

    // Function to generate game tiles dynamically
    function generateGameTiles(data, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.innerHTML = ''; // Clear existing content
        data.forEach(game => {
            const tile = document.createElement('div');
            tile.classList.add('game-tile');
            tile.innerHTML = `
                <div class="game-tile-image">${game.imageText}</div>
                <div class="game-tile-content">
                    <h4>${game.name}</h4>
                    <p>⭐ ${game.players} playing</p>
                    <button class="play-button" onclick="handlePlay('${game.name}')">Play</button>
                </div>
            `;
            container.appendChild(tile);
        });
    }

    // Initialize game tiles on the Home and Games pages
    if (document.querySelector('#home-game-grid')) {
        // Only show a few on the home page
        generateGameTiles(mockGames.slice(0, 6), '#home-game-grid'); 
    }
    if (document.querySelector('#all-games-grid')) {
        // Show all on the games page
        generateGameTiles(mockGames, '#all-games-grid'); 
    }

    // --- Mock Play Button Handler (Core Feature Mock) ---
    window.handlePlay = function(gameName) {
        // Simulates the action of launching the game
        alert(`Launching ${gameName}... (In a real application, this would launch the Roblox player)`);
    };

    // --- Mock Search Functionality ---
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Searching for: "${query}" (Redirecting to search results page...)`);
                    // In a real mock, you would navigate to a search.html page
                    // window.location.href = 'search.html?q=' + encodeURIComponent(query);
                }
            }
        });
    }
});
