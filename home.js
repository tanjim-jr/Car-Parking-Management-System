document.addEventListener("DOMContentLoaded", () => {
    // Utility function to set up popup functionality
    function setupPopup(cardId, popupId, closeBtnId) {
      const card = document.getElementById(cardId);
      const popup = document.getElementById(popupId);
      const closeButton = document.getElementById(closeBtnId);
  
      if (card && popup && closeButton) {
        // Show popup on card click
        card.addEventListener("click", () => {
          popup.classList.remove("hidden");
        });
  
        // Hide popup on close button click
        closeButton.addEventListener("click", () => {
          popup.classList.add("hidden");
        });
      } else {
        console.error(
          `Missing elements: card (${cardId}), popup (${popupId}), or close button (${closeBtnId})`
        );
      }
    }
  
    // Set up popups for each card
    setupPopup("real-time-parking-card", "popup", "close-popup");
    setupPopup("user-friendly-dashboards-card", "popup-dashboard", "close-dashboard-popup");
    setupPopup("secure-login-card", "service-card", "close-popup-card-1");
  });
  