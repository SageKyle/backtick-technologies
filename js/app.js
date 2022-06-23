// UI VARIABLES
const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
const navCloseToggle = document.querySelector('.close');

// NAVIGATION TOGGLE
toggle.addEventListener('click', ()=> {
    navigation.classList.toggle('hidden')
    toggle.style.visibility = 'hidden'
});

navCloseToggle.addEventListener('click', ()=> {
    navigation.classList.toggle('hidden')
    toggle.style.visibility = 'visible'
})