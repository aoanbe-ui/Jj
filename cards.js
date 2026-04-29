// 1. Array of card objects
const projectCards = [
    {
        id: "1",
        title: "React Dashboard",
        description: "A complex admin project built with React and Tailwind.",
        imageUrl: "https://placehold.co/300x200?text=React+Project",
        link: "https://github.com/user/react-dashboard"
    },
    {
        id: "2",
        title: "API Weather App",
        description: "A simple app that fetches data from a weather API.",
        imageUrl: "https://placehold.co/300x200?text=Weather+App",
        link: "https://github.com/user/weather-app"
    },
    {
        id: "3",
        title: "JavaScript Calculator",
        description: "A vanilla JavaScript logic project.",
        imageUrl: "https://placehold.co/300x200?text=JS+Calculator"
    }
];

function renderCards(cardsArray) {
    const container = document.createElement('div');
    container.id = 'card-container';
    container.style.display = 'flex';
    container.style.gap = '20px';
    container.style.flexWrap = 'wrap';
    container.style.padding = '20px';
    document.body.appendChild(container);

    cardsArray.forEach(card => {
        const cardDiv = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        
        // Initial Styles
        cardDiv.style.border = '1px solid #ccc';
        cardDiv.style.borderRadius = '8px';
        cardDiv.style.padding = '15px';
        cardDiv.style.width = '250px';
        cardDiv.style.cursor = 'pointer';
        cardDiv.style.backgroundColor = 'white'; // Set initial color
        cardDiv.style.transition = 'background-color 0.3s';

        img.src = card.imageUrl;
        img.style.width = '100%';
        h3.textContent = card.title;
        p.textContent = card.description;

        cardDiv.append(img, h3, p);

        if (card.link) {
            const btn = document.createElement('a');
            btn.href = card.link;
            btn.textContent = 'View Project';
            btn.style.display = 'block';
            btn.style.marginTop = '10px';
            cardDiv.appendChild(btn);
        }

        // --- NEW HOVER LOGIC ---
        
        // 1. When mouse enters, turn pink
        cardDiv.addEventListener('mouseenter', () => {
            cardDiv.style.backgroundColor = 'pink';
        });

        // 2. When mouse leaves, return to white
        cardDiv.addEventListener('mouseleave', () => {
            cardDiv.style.backgroundColor = 'white';
        });

        // Keep your original click listener if you want
        cardDiv.addEventListener('click', () => {
            console.log(`Clicked on: ${card.title}`);
        });

        container.appendChild(cardDiv);
    });
}

// Call the function
renderCards(projectCards);

// --- REDUCE ---
// Goal: Total character count of all titles
const totalTitleChars = projectCards.reduce((acc, card) => {
    return acc + card.title.length;
}, 0);
console.log("Total Title Characters:", totalTitleChars);

// --- SORT ---
// Goal: Sort alphabetically by title
const sortedCards = [...projectCards].sort((a, b) => {
    return a.title.localeCompare(b.title);
});
console.log("Sorted Cards:", sortedCards);

// --- FILTER ---
// Goal: Find descriptions containing "JavaScript"
const filteredCards = projectCards.filter(card => {
    return card.description.toLowerCase().includes("javascript");
});
console.log("Filtered Cards (JavaScript):", filteredCards);

// --- MAP ---
// Goal: Create an array of just the titles
const cardTitles = projectCards.map(card => card.title);
console.log("Card Titles Array:", cardTitles);
