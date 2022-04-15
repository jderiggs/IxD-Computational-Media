//Animation for changing the hamburger menu to a closed icon
const menuBtn= document.querySelector('.menu-btn'); //creating a constant statement targeting the menu-btn class
const nav=document.querySelector('nav'); //creating a constant statement targeting the nav
const bgBlur=document.querySelector('.blurbg'); //creating a constant statement targeting the black background
const bgClickbox=document.querySelector('.bgclick') //creating a constant satement targeting an invisible clickbox
let menuOpen = false //declaring that the menu should be closed globally

menuBtn.addEventListener('click', () => { //allowing the menu button to be interacted with when clicked/tapped on
    menuBtn.classList.toggle('open');
    nav.classList.toggle('active');
    bgBlur.classList.toggle('active');
    bgClickbox.classList.toggle('active');
});//when the menu button is clicked/tapped, toggles the class 'open' and sets the nav to 'active'. Also activates the background blur.

bgClickbox.addEventListener('click', () => { //allowing the user to click outside of the navbox in order to close the menu
    menuBtn.classList.toggle('open');
    nav.classList.toggle('active');
    bgBlur.classList.toggle('active');
    bgClickbox.classList.toggle('active');
});