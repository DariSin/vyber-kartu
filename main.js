

const cards = Array.from(document.querySelectorAll(".card"));
const shuffleBtn = document.querySelector(".zamichat");
const cardContainer = document.querySelector(".karty");
const eshopButton = document.getElementById("eshopButton"); 

let kartaJizOtocena = false;
let aktualniKarta = null;

function flipCard() {
    // Pokud už je karta otočená (má třídu is-flipped), nic nedělej
    if (this.classList.contains('is-flipped')) return;

    // Pokud už je otočena nějaká karta a není to tahle, nic nedělej
    if (kartaJizOtocena && this !== aktualniKarta) return;

    // Přidej třídu is-flipped, tedy otoč kartu
    this.classList.add('is-flipped');

    // Nastav stav otočení
    kartaJizOtocena = true;
    aktualniKarta = this;

     // Zobraz tlačítko e-shopu
    if (eshopButton) {
        eshopButton.style.display = "inline-block";
    }
}

// Připoj event listenery na všechny karty
cards.forEach(card => card.addEventListener("click", flipCard));

shuffleBtn.addEventListener("click", () => {
    // Reset stavu otočení
    kartaJizOtocena = false;
    aktualniKarta = null;

    // Odstraň třídu is-flipped ze všech karet (otočí je zpět)
    cards.forEach(card => card.classList.remove("is-flipped"));

     // Skryj tlačítko e-shopu
    if (eshopButton) {
        eshopButton.style.display = "none";
    }

    // Zamíchej karty náhodným pořadím
    const shuffled = cards
        .map(card => ({ card, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ card }) => card);

    // Přidej karty zpět do kontejneru ve zmíchaném pořadí
    shuffled.forEach(card => cardContainer.appendChild(card));
});



