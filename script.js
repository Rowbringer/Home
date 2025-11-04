// script.js - Merged Functionality for Single-Page CloneBlox

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mock Data for Games (Used on Discover and Games sections) ---
    const mockGames = [
        { name: "Mega Obby World", players: "125k", imageText: "Obby Image" },
        { name: "Roleplay City 2", players: "88k", imageText: "City RP Image" },
        { name: "Survival Game X", players: "54k", imageText: "Survival Image" },
        { name: "Tycoon Empire", players: "31k", imageText: "Tycoon Image" },
        { name: "Mystery Solver", players: "19k", imageText: "Mystery Image" },
        { name: "Race Car Simulator", players: "15k", imageText: "Race Image" },
        { name: "Pet Collector 3", players: "10k", imageText: "Pets Image" },
        { name: "Building Sandbox", players: "5k", imageText: "Build Image" },
        { name: "Fighting Arena", players: "4k", imageText: "Fighter Image" },
        { name: "Fantasy Quest", players: "2k", imageText: "Quest Image" },
    ];

    // --- 1. Dynamic Content Generation (Replaces hardcoded tiles) ---
    function generateDynamicContent() {
        // --- Discover Page (Popular Now Section - Top 6) ---
        const homeContainer = document.querySelector('#home-game-grid');
        if (homeContainer) {
            let htmlContent = '';
            // Generate tiles for the top 6 games for the Home page
            mockGames.slice(0, 6).forEach(game => {
                htmlContent += `
                    <div class="game-tile">
                        <div class="game-tile-image">${game.imageText}</div>
                        <div class="game-tile-content">
                            <h4>${game.name}</h4>
                            <p>⭐ ${game.players} playing</p>
                            <button class="play-button" onclick="handlePlay('${game.name}')">Play</button>
                        </div>
                    </div>
                `;
            });
            homeContainer.innerHTML = htmlContent;
        }

        // --- Games Page (All Games Section - All 10) ---
        const gamesContainer = document.querySelector('#all-games-grid');
        if (gamesContainer) {
            let htmlContent = '';
            // Generate tiles for all games for the Games page
            mockGames.forEach(game => {
                htmlContent += `
                    <div class="game-tile">
                        <div class="game-tile-image">${game.imageText}</div>
                        <div class="game-tile-content">
                            <h4>${game.name}</h4>
                            <p>⭐ ${game.players} playing</p>
                            <button class="play-button" onclick="handlePlay('${game.name}')">Play</button>
                        </div>
                    </div>
                `;
            });
            // Clear existing static tiles and insert dynamic ones
            gamesContainer.innerHTML = htmlContent;
        }
    }

    // Call the function to populate the grids when the page loads
    generateDynamicContent();

    // --- 2. Mock Interaction Handlers (Global Functions) ---

    // Mock Play Button Handler (Used across Discover and Games sections)
    window.handlePlay = function(gameName) {
        // Simulates the action of launching the game
        alert(`🚀 Launching ${gameName}... (In a real application, this would launch the Roblox player)`);
    };

    // Mock Search Functionality (Used in the Header)
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`🔍 Searching the CloneBlox platform for: "${query}"`);
                }
            }
        });
    }

    // Mock Shop Purchase Handler (Used in the Shop section)
    window.mockPurchase = function(itemName, price) {
        const currentRobux = 1250; // Mock current Robux balance from HTML header
        if (price <= currentRobux) {
            alert(`✅ SUCCESS! You purchased '${itemName}' for R$ ${price}. Your new mock Robux balance is R$ ${currentRobux - price}.`);
        } else {
            alert(`❌ ERROR! You only have R$ ${currentRobux}. You need R$ ${price} to buy '${itemName}'.`);
        }
    };
    
    // Attach mockPurchase function to the buttons in the Shop section 
    // (This is done directly in the HTML 'onclick' for simplicity in the merged structure)
});
