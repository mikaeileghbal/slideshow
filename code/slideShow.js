let cardIndex = 0;
let cards = document.querySelectorAll(".card");

console.log(cards[cardIndex]);

document.addEventListener("click", (e) => {
    bringToView(cards[cardIndex]);
})

let cardsInterval = setInterval(changeCard, 3000);

function changeCard() {
    cardIndex++;
    if (cardIndex >= cards.length) {
        cardIndex = 0;
    }

    setZIndex(cards, cardIndex);

    bringToView(cards[cardIndex]);
    cards[cardIndex].addEventListener("transitionend", e => {
        if (cardIndex !== 0) {
            resetCard(cardIndex - 1);
        }
        else {
            resetCard(cards.length - 1);
        }

    });
}

function setZIndex(cards, index) {
    cards.forEach(card => card.style.zIndex = "0");

    cards[index].style.zIndex = "1";
}

function resetCard(index) {
    cards[index].classList.remove("active");
}

function bringToView(card) {
    card.classList.add("active");
}