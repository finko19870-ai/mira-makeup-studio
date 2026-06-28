// ==========================================================
// MIRA MAKEUP STUDIO
// SCRIPT.JS
// ==========================================================


// ===============================
// SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


sections.forEach(section=>{

    observer.observe(section);

});


// ===============================
// HEADER EFFECT
// ===============================

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }


});


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");


if(menuToggle && nav){


    menuToggle.addEventListener("click",()=>{


        nav.classList.toggle("active");

        menuToggle.classList.toggle("open");


    });


}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");

        menuToggle.classList.remove("open");


    });


});


// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});