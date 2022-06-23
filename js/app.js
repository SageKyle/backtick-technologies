// UI VARIABLES
const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
const navCloseToggle = document.querySelector('.close');
const benefitsContainer = document.querySelector('.benefits');
const benefitsCard = document.querySelectorAll('.benefits .col-1-of-4');


// MOUSE EVENTS

// ANIMATION TOGGLE
benefitsContainer.addEventListener('mouseenter', () => {
    benefitsCard.forEach(card => {
        card.classList.toggle('animate-left');
    });

}, { once: true });


// NAVIGATION TOGGLE
toggle.addEventListener('click', ()=> {
    navigation.classList.toggle('hidden')
    toggle.style.visibility = 'hidden'
});

navCloseToggle.addEventListener('click', ()=> {
    navigation.classList.toggle('hidden')
    toggle.style.visibility = 'visible'
})