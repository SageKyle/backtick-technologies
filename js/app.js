const navigation = document.querySelector('.navigation');
const benefitsContainer = document.querySelector('.benefits')
const benefitsCard = document.querySelectorAll('.benefits .col-1-of-4')

// navigation.addEventListener('scroll', function(e) {
//         // console.log(e);

//         if(e.target.clientHeight <= 0) {
//             navigation.style.position = 'fixed'
//             navigation.style.top = '0'
//             navigation.style.zIndex = '500'
//             console.log('nav fixed')
//         }

// });

// MOUSE EVENTS

benefitsContainer.addEventListener('mouseenter', (e) => {
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
