function toggleCard(element) {
    const isActive = element.getAttribute("data-state") === "active";
    const isOccupied = element.classList.contains("occupied");

    // Close all other open cards
    document.querySelectorAll(".chess-square[data-state='active']").forEach((square) => {
        square.setAttribute("data-state", "default");
        document.querySelectorAll(".card-overlay").forEach((overlay) => overlay.remove());
    });

    // If already active, close and return
    if (isActive) {
        element.setAttribute("data-state", "default");
        return;
    }

    // Set this square to active
    element.setAttribute("data-state", "active");

    // Create and show a card overlay
    const overlay = document.createElement("div");
    overlay.className = "card-overlay";

    const cardContent = isOccupied
        ? element.querySelector(".sponsor-card").innerHTML
        : element.querySelector(".default-card").innerHTML;

    overlay.innerHTML = `
        <div class="card-modal">
            <button class="close-btn" onclick="document.querySelector('.card-overlay').remove()">✕</button>
            ${cardContent}
        </div>
    `;

    document.body.appendChild(overlay);
}
