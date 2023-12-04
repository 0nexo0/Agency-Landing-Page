// Navbar Script
document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    }
});

// Our Works Carousel Script
let slideScrollBar = document.querySelector('.our-works-container');
let nextBtn = document.querySelector('.carosule-btn-02');
let previousBtn = document.querySelector('.carosule-btn-01');

nextBtn.addEventListener('click', () => {
    slideScrollBar.scrollLeft += 100;
    slideScrollBar.style.scrollBehavior = "smooth";
});
previousBtn.addEventListener('click', () => {
    slideScrollBar.scrollLeft -= 100;
    slideScrollBar.style.scrollBehavior = "smooth";
});

//Recent Works Carousel Script
let scrollSlideBar = document.querySelector('.recent-works-container');
        let recentNextBtn = document.querySelector('#recent-work-next-btn');
        let recentPreviousBtn = document.querySelector('#recent-work-previous-btn');

        recentNextBtn.addEventListener('click', () => {
            scrollSlideBar.scrollLeft += 100;
            scrollSlideBar.style.scrollBehaviour = "smooth";
        });
        
        recentPreviousBtn.addEventListener('click', () => {
            scrollSlideBar.scrollLeft -= 100;
            scrollSlideBar.style.scrollBehaviour = "smooth";
        });