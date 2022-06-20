const navigation = document.querySelector('.navigation');
const benefitsContainer = document.querySelector('.benefits')
const benefitsCard = document.querySelectorAll('.benefits .col-1-of-4')
const mainSection = document.querySelector('#main')


// MOUSE EVENTS

benefitsContainer.addEventListener('mouseenter', (e) => {
    // navigation.classList.toggle('border-bottom');
    // navigation.classList.toggle('position-fixed');
    benefitsCard.forEach(card => {
        card.classList.toggle('animate-left');
    });

    // POINTER EvENTS
benefitsContainer.addEventListener('pointerenter', (e) => {
    benefitsCard.forEach(card => {
        card.classList.toggle('animate-left');
    });
}, { once: true });

}, { once: true });

mainSection.addEventListener('mouseenter', (e) => {
    navigation.classList.add('border-bottom');
    navigation.classList.toggle('position-fixed');

});

