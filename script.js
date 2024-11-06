
const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg"
];

let cardsArray = [...images, ...images]; // Duplicate for pairs
cardsArray.sort(() => 0.5 - Math.random()); // Shuffle

const gameBoard = document.getElementById("gameBoard");

let flippedCards = [];
let matchedPairs = 0;

// Create card elements
cardsArray.forEach((image, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"><img src="images/${image}" alt="card image"></div>
            <div class="card-back"></div>
        </div>
    `;

    card.addEventListener("click", () => {
        if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
            card.classList.add("flipped");
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    });

    gameBoard.appendChild(card);
});

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.image === card2.dataset.image) {
        matchedPairs++;
        flippedCards = [];

        if (matchedPairs === images.length) {
            setTimeout(() => alert("Congratulations! You've found all pairs!"), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
        }, 1000);
    }
}
