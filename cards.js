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

// 2. Function to render cards dynamically
function renderCards(cardsArray) {
    // Create a container and append it to the body
    const container = document.createElement('div');
    container.id = 'card-container';
    container.style.display = 'flex';
    container.style.gap = '20px';
    container.style.flexWrap = 'wrap';
    container.style.padding = '20px';
    document.body.appendChild(container);

    cardsArray.forEach(card => {
        // Create elements
        const cardDiv = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        
        // Style the card
        cardDiv.style.border = '1px solid #ccc';
        cardDiv.style.borderRadius = '8px';
        cardDiv.style.padding = '15px';
        cardDiv.style.width = '250px';
        cardDiv.style.cursor = 'pointer';
        cardDiv.style.transition = 'background-color 0.3s';

        // Set content
        img.src = card.imageUrl;
        img.style.width = '100%';
        h3.textContent = card.title;
        p.textContent = card.description;

        // Append to cardDiv
        cardDiv.append(img, h3, p);

        // Optional Link Button
        if (card.link) {
            const btn = document.createElement('a');
            btn.href = card.link;
            btn.textContent = 'View Project';
            btn.style.display = 'block';
            btn.style.marginTop = '10px';
            cardDiv.appendChild(btn);
        }

        // --- Event Listener ---
        cardDiv.addEventListener('click', () => {
            // Toggle highlight style
            const isHighlighted = cardDiv.style.backgroundColor === 'lightyellow';
            cardDiv.style.backgroundColor = isHighlighted ? 'white' : 'lightyellow';
            console.log(`Clicked on: ${card.title}`);
        });

        // Append card to container
        container.appendChild(cardDiv);
    });
}

// Call the function
renderCards(projectCards);
