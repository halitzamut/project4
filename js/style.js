



function style() {

    const threeBarsCont = document.querySelector(".three-bars");

    const navigationDash = document.querySelector(".navigation-dash");


    return (

    <>
    
    {threeBarsCont}.onclick = () => {
    {navigationDash}.classList.toggle("navigation-dash-appear")

};

    </>
    )
}

export default style











// const headerEl = document.querySelector(".head-container");



// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//     if (lastScrollY < window.scrollY) {
//         headerEl.classList.add("hide-header")
//     } else {
//         headerEl.classList.remove("hide-header")
//     }
//     lastScrollY = window.scrollY
// });




// const activeClass = document.querySelectorAll(".bars li a");
// activeClass.forEach(ele => {
//     ele.addEventListener("click", (even) => {
//         even.target.parentElement.parentElement.querySelectorAll(".active").forEach(oneActive => {
//             oneActive.classList.remove("active");
//         });
//         even.target.classList.add("active");
//     });
// });



// const threeBarsCont = document.querySelector(".three-bars");


// const navigationDash = document.querySelector(".navigation-dash");

// threeBarsCont.onclick = () => {
//     navigationDash.classList.toggle("navigation-dash-appear");

// };


// window.onscroll = function() {
//     navigationDash.classList.remove("navigation-dash-appear");
// };

// document.addEventListener("click", function clickOutSide(eve) {
//     if (!headerEl.contains(eve.target)) {
//         navigationDash.classList.remove("navigation-dash-appear")
//     }
// })


//      START SWİPPER


// var swiper = new Swiper(".slide-container", {
//     mousewheel: true,
//     slidesPerView: 1,
//     spaceBetween: 10,
//     centeredSlides: "true",
//     fade: true,
//     grapCursor: "true",
//     centeredSlides: false,
//     grabCursor: true,

//     breakpoints: {
//         0: {
//             slidesPerView: 2,
//         },
//         520: {
//             slidesPerView: 2.5,
//         },
//         769: {
//         slidesPerView: 3.5,
//         },
//         1000: {
//             slidesPerView: 4.5,
//         },
//     },

//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
// });

