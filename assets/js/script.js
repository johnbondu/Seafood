/*==========================================
        MOBILE MENU
==========================================*/

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        mobileMenu.classList.add("active");

        mobileOverlay.classList.add("active");

        document.body.style.overflow="hidden";

    });

}

if(closeMenu){

    closeMenu.addEventListener("click",closeMobileMenu);

}

if(mobileOverlay){

    mobileOverlay.addEventListener("click",closeMobileMenu);

}

function closeMobileMenu(){

    mobileMenu.classList.remove("active");

    mobileOverlay.classList.remove("active");

    document.body.style.overflow="";

}
const dropdownBtn = document.querySelector(".mobile-dropdown-btn");
const submenu = document.querySelector(".mobile-submenu");

if (dropdownBtn) {

    dropdownBtn.addEventListener("click", function () {

        submenu.classList.toggle("active");

        this.querySelector("i").classList.toggle("fa-chevron-up");

    });

}
