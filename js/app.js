// var navbar = document.getElementById("navbar__menu")

// const navSlide= () => {
//     const navbar = document.querySelector('.navbar__menu');
//     const nav = document.querySelector('.menu__link')

//     navbar.addEventListener('click', () =>) {
//         nav.classList.toggle('nav-active');
//     }

// }





/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navbar__menu(){
    const navs = document.querySelectorAll('.Navbar__menu')

    navs.forEach(nav => nav.classList.toggle('Navbar__link'));
}

document. querySelector('.Navbar__Menu.menu__link')
    .addEventListener('click', classList);


// Add class 'active' to section when near top of viewport
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function showSlides(){
    let slides = document.getElementsByClassName("MeetTheTeam");
    for (i = 0; i < slides.length; i++){
        slides[i].getElementsByClassName.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides [slideIndex-1].getElementsByClassName.display = "block";
    setTimeout(showSlides, 2000);
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active