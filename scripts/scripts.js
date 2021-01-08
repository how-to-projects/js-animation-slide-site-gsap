const tl = gsap.timeline(
    {
        defaults: {
            ease: 'power1.out'
        }
    }
);

tl.to('.text', 
{
    y: '0%',
    duration: 1,
    stagger: 0.25
});

tl.to('.slider', 
{
    y: '-100%', 
    duration: 1.5,
    delay: 0.5
});

tl.to('.intro', 
{
    y: '-100%', 
    duration: 1,
    delay: 0.5
}, '-=1.40');

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1.40');


/**
 * Animate thinky
 */
function thinky() {

    const logo = document.getElementsByClassName('paths');

    for (let i =0; i < logo.length; i++) {
        console.log(`${i + 1}: ${logo[i].getTotalLength()},`);
    }
}
thinky();