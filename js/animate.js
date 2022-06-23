// UI VARIABLES
const benefitsContainer = document.querySelector('.benefits');
const benefitsCard = document.querySelectorAll('.benefits .col-1-of-4');


// MOUSE EVENTS

// ANIMATION TOGGLE
benefitsContainer.addEventListener('mouseenter', () => {
    benefitsCard.forEach(card => {
        card.classList.toggle('animate-left');
    });

}, { once: true });
