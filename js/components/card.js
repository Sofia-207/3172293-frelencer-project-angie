// js/components/card.js
export async function loadCard(containerSelector, cardIds = []) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    try {
        const [templateRes, dataRes] = await Promise.all([
            fetch("./views/components/card.html"),
            fetch("./data/card.json")
        ]);

        const template = await templateRes.text();
        const cards = await dataRes.json();

        const filteredCards = cardIds.length
            ? cards.filter((card) => cardIds.includes(card.id))
            : cards;

        const cardsHtml = filteredCards
            .map((card) =>
                template
                    .replaceAll("{{title}}", card.title ?? "")
                    .replaceAll("{{icon1}}", card.icon1 ?? "")
                    .replaceAll("{{icon2}}", card.icon2 ?? "")
                    .replaceAll("{{description}}", card.description ?? "")
            )
            .join("");

        container.innerHTML = cardsHtml;
    } catch (error) {
        console.error("Error cargando las cards:", error);
    }
}


