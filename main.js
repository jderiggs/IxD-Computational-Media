//Animation for changing the hamburger menu to a closed icon
const menuBtn= document.querySelector('.menu-btn'); //creating a constant statement targeting the menu-btn class
const nav=document.querySelector('nav'); //creating a constant statement targeting the nav
const bgBlur=document.querySelector('.blurbg'); //creating a constant statement targeting the black background
const bgClickbox=document.querySelector('.bgclick'); //creating a constant satement targeting an invisible clickbox
const bgBlur2=document.querySelector('.blurbg2'); //creating a constant statement targeting the black background
const bgClickbox2=document.querySelector('.bgclick2'); //creating a constant satement targeting an invisible clickbox
const bgBlur3=document.querySelector('.blurbg3'); //creating a constant statement targeting the black background
const bgClickbox3=document.querySelector('.bgclick3'); //creating a constant satement targeting an invisible clickbox
const questionPrompt=document.querySelector('.prompt');
const buttonPrompt=document.querySelector('.buttonprompt');
const promptContainer=document.querySelector('.prompt-container');
const promptContainer2=document.querySelector('.prompt-container2');
const promptCloser=document.querySelector('.promptcloser');
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

questionPrompt.addEventListener('click', () => {
    bgBlur2.classList.toggle('active');
    bgClickbox2.classList.toggle('active');
    promptContainer.classList.toggle('active');
});

promptCloser.addEventListener('click', () =>{ //allowing the user to click buttons to close prompts
    bgBlur2.classList.toggle('active');
    bgClickbox2.classList.toggle('active');
    promptContainer.classList.toggle('active');
});

bgClickbox2.addEventListener('click', () => { //allowing the user to click prompt in order to close it 
    bgBlur2.classList.toggle('active');
    bgClickbox2.classList.toggle('active');
    promptContainer.classList.toggle('active');
});

buttonPrompt.addEventListener('click', () => {
    bgBlur3.classList.toggle('active');
    bgClickbox3.classList.toggle('active');
    promptContainer2.classList.toggle('active');
});

bgClickbox3.addEventListener('click', () => { //allowing the user to click prompt in order to close it 
    bgBlur3.classList.toggle('active');
    bgClickbox3.classList.toggle('active');
    promptContainer2.classList.toggle('active');
});