
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
Solution - nepřidá #id do URL - nevím jak se to dělá v praxi, ale štvalo mě to

mohl bych dát href="#id", ale to přidalo #id na konec URL a se mi prostě nelíbilo
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
const scrollHomeFooter = document.getElementById("scroll-home-footer");
const scrollAboutFooter = document.getElementById("scroll-about-footer");
const scrollWorkFooter = document.getElementById("scroll-work-footer");
const scrollContactFooter = document.getElementById("scroll-contact-footer");

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


scrollHomeFooter.addEventListener("click", function(){
    Home.scrollIntoView()
});

scrollAboutFooter.addEventListener("click", function(){
    About.scrollIntoView()
});

scrollWorkFooter.addEventListener("click", function(){
    Work.scrollIntoView()
});

scrollContactFooter.addEventListener("click", function(){
    Contact.scrollIntoView()
});

/*---------------------------------------------
ChatGPT - Solution

Smooth-Scroll na #id když se načte index.html, ale v url zůstane #id

Jednoduše #id prostě odstraním z URL :DDD
Je to absolutně otřesný řešení, ale přišlo mi to s kámošem vtipné tak jsem to implementoval :DDD

Bohužel to na <a>Contact nefunguje a asi ani není třeba to dělat.

---------------------------------------------*/


document.addEventListener("DOMContentLoaded", () => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
  
    if (hash) {
      // Find the target section by the hash (removing the #)
      const targetId = hash.substring(1); // e.g., "about" from "#about"
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        // Scroll smoothly to the section
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
  
        // Remove the hash from the URL without refreshing the page
        history.replaceState(null, null, window.location.pathname);
      }
    }
  });