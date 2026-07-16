/*==================================================
                HERO SLIDER
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const heroSwiper = new Swiper(".heroSwiper", {

        effect: "fade",

        fadeEffect: {
            crossFade: true
        },

        loop: true,

        speed: 900,

        autoplay: {

            delay: 5000,

            disableOnInteraction: false,

            pauseOnMouseEnter: false

        },

        preloadImages: true,

        watchSlidesProgress: true,

        keyboard: {
            enabled: true
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        grabCursor: true,

        allowTouchMove: true,

        simulateTouch: true,

        touchRatio: 1,

        followFinger: true,

        threshold: 5,

        shortSwipes: true,

        longSwipes: true,

        touchStartPreventDefault: false,

        touchMoveStopPropagation: false

    });
    /*==========================================
        HERO CUSTOM BUTTONS
==========================================*/

    document.querySelector(".hero-prev").addEventListener("click", () => {

        heroSwiper.slidePrev();

    });

    document.querySelector(".hero-next").addEventListener("click", () => {

        heroSwiper.slideNext();

    });

});


/*==================================================
            SCROLL INDICATOR
==================================================*/

const scrollBtn = document.querySelector(".scroll-down");

if (scrollBtn) {

    scrollBtn.addEventListener("click", function () {

        const nextSection = document.querySelector(".trust-strip");

        if (nextSection) {

            nextSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}


/*==================================================
        NAVBAR BACKGROUND
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.classList.add("active-header");

    } else {

        header.classList.remove("active-header");

    }

});


/*==================================================
        HERO BUTTON RIPPLE
==================================================*/

document.querySelectorAll(".hero-buttons .btn").forEach(button => {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


/*==================================================
        IMAGE PRELOAD
==================================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(".heroSwiper img").forEach(img => {

        const image = new Image();

        image.src = img.src;

    });

});


/*==================================================
        PAUSE WHEN TAB IS HIDDEN
==================================================*/

document.addEventListener("visibilitychange", () => {

    const swiper = document.querySelector(".heroSwiper").swiper;

    if (!swiper) return;

    if (document.hidden) {

        swiper.autoplay.stop();

    } else {

        swiper.autoplay.start();

    }

});

/*==================================================
            HOW TO ORDER ANIMATION
==================================================*/

const orderCards = document.querySelectorAll(".order-card");

const orderObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

orderCards.forEach((card)=>{

    orderObserver.observe(card);

});
/*==================================================
            RIPPLE BUTTON EFFECT
==================================================*/

document.querySelectorAll(".availability-btn").forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const circle=document.createElement("span");

        const diameter=Math.max(button.clientWidth,button.clientHeight);

        const radius=diameter/2;

        circle.style.width=circle.style.height=`${diameter}px`;

        circle.style.left=`${e.clientX-button.getBoundingClientRect().left-radius}px`;

        circle.style.top=`${e.clientY-button.getBoundingClientRect().top-radius}px`;

        circle.classList.add("ripple");

        const ripple=button.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        button.appendChild(circle);

    });

});
/*==================================================
        DELIVERY SECTION ANIMATION
==================================================*/

const shippingCards = document.querySelectorAll(".shipping-card");

const shippingObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

shippingCards.forEach((card)=>{

    shippingObserver.observe(card);

});
/*==================================================
                FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});
/*==================================================
        BACK TO TOP
==================================================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        scrollTopBtn.classList.add("show");

    }

    else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*==================================================
                PRODUCT FILTER
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    function filterProducts(category){

        productCards.forEach(card=>{

            if(category==="all" || card.dataset.category===category){

                card.style.display="block";

                requestAnimationFrame(()=>{

                    card.classList.remove("hide-card");
                    card.classList.add("show-card");

                });

            }

            else{

                card.classList.remove("show-card");
                card.classList.add("hide-card");

                setTimeout(()=>{

                    card.style.display="none";

                },250);

            }

        });

    }

    /* Default */

    filterProducts("all");

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>{

                btn.classList.remove("active");

            });

            button.classList.add("active");

            filterProducts(button.dataset.filter);

        });

    });

});