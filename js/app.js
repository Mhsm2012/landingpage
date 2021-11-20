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
// get access to nav_list and then create li for it 
const barNav = document.getElementById("navbar__list");


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavList => (){
document.querySelectorAll("section").forEach((section)=>{
const item = '<li> <a href ="#${section.id}" data-nav"${section.id}" class = "menu__link">${section.dataset.nav}</a>'
barNav.insertAdjacentHTML("beforeend",item);
});
};


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
