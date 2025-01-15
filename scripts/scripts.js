
console.log("Hello, If you are reading this, this means it is working, well I hope it's working");

/*---------------------------------------------
Hamburger menu Toggle
---------------------------------------------*/

const hamburgerToggle = document.querySelector(".hamburger-menu");
const mainMenuToggle = document.querySelector(".main-menu");

hamburgerToggle.addEventListener("click", function() {
    hamburgerToggle.classList.toggle("is-active");
    mainMenuToggle.classList.toggle("is-active");
});

/*---------------------------------------------
Click on hamburger menu item for scroll = close menu
---------------------------------------------*/

  
const itemTrigger = document.querySelector(".main-menu-list"); 

itemTrigger.addEventListener("click", function(){

    if (mainMenuToggle.classList.contains("is-active"))
    {
        mainMenuToggle.classList.toggle("is-active");
        hamburgerToggle.classList.toggle("is-active");
        console.log("Hamburger-menu has been hidden");
    }
    else {
        console.log("Hamburger-menu did not hide which is correct");
    }
});

/*---------------------------------------------
Solution - doesn't add id URL when clicking a scroll to button
---------------------------------------------*/

const scrollAbout = document.getElementById("scroll-about");
const scrollWork = document.getElementById("scroll-work");
const scrollWorkButton = document.getElementById("scroll-work-button");
const scrollContact = document.getElementById("scroll-contact");
const scrollHome = document.getElementById("scroll-home");
const About = document.getElementById("about");
const Work = document.getElementById("work");
const Contact = document.getElementById("contact");
const Home = document.getElementById("home");

scrollAbout.addEventListener("click", function(){
    About.scrollIntoView()
});

scrollWork.addEventListener("click", function(){
    Work.scrollIntoView()
});

scrollWorkButton.addEventListener("click", function(){
    Work.scrollIntoView()
});

scrollContact.addEventListener("click", function(){
    Contact.scrollIntoView()
});

scrollHome.addEventListener("click", function(){
    Home.scrollIntoView()
});