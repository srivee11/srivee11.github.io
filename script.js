const mobile_navbar= document.querySelector(".mobile-navbar") ;
const hamburger= document.querySelector(".hamburger") ;


hamburger.addEventListener("click", () => {
    mobile_navbar.classList.toggle("open_draw");
} ) ;