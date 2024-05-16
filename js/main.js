const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e) =>  {
navLinks.classList.toggle("open");

const isOpen = navlinks.classList.contains("open");
menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")


});

navLinks.addEventListener("click",(e) => {
navLinks.classList.remove("open")
menuBtnIcon.setAttribute("class", "ri-menu-line");
});




const scrollRevalOption = {
distance: "50px",
origin: "bottom",
duration: 1000,


}


//header container

ScrollReveal().reveal(".header__image img",{
...scrollRevalOption,

});



ScrollReveal().reveal(".header__content h4,.header__content .section__header",{
...scrollRevalOption,
delay: 500,

});


ScrollReveal().reveal(".header__content h4,p",{
    ...scrollRevalOption,
    delay: 1000,
    
    });


    ScrollReveal().reveal(".header__btn",{
        ...scrollRevalOption,
        delay: 1500,
        
        });




        //about container



        ScrollReveal().reveal(".about__image img",{
            ...scrollRevalOption,
            origin: "left",
            
            });


            ScrollReveal().reveal(".about__content .section__header",{
                ...scrollRevalOption,
                delay: 500,
                
                });


                ScrollReveal().reveal(".about__content .section__description",{
                    ...scrollRevalOption,
                    delay: 1000,
                    
                    });


                    ScrollReveal().reveal(".about__card",{
                        ...scrollRevalOption,
                        delay: 1500,
                        interval: 500,
                        });



                        //price container 
                       
                        ScrollReveal().reveal(".price__card",{
                            ...scrollRevalOption,
                            interval: 500,
                            });
    
               const swiper = new Swiper (".swiper",{
               loop: true,
               SlidesPerview: "auto",
               SpaceBetween: 20,
                   });
