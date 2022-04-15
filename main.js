//Animation for changing the hamburger menu to a closed icon
const menuBtn= document.querySelector('.menu-btn'); //creating a constant statement targeting the menu-btn class
let menuOpen = false //declaring that the menu should be closed globally
menuBtn.addEventListener('click', () => { //allowing the menu button to be interacted with when clicked/tapped on
    menuBtn.classList.toggle('open');
});//when the menu button is clicked/tapped, toggles the class 'open'