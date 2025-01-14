
console.log("Hello, If you are reading this, this means it is working, well I hope it's working");

/*---------------------------------------------
Hamburger menu Toggle
---------------------------------------------*/

const hamburgerToggle = document.querySelector(".hamburger-menu");
const mainMenuToggle = document.querySelector(".main-menu");

hamburgerToggle.addEventListener("click", function() {
    hamburgerToggle.classList.toggle("is-active");
    mainMenuToggle.classList.toggle("is-active");
})

/*---------------------------------------------
Click on hamburger menu item for scroll = close menu
---------------------------------------------*/

  
const itemTrigger = document.querySelector(".main-menu-list"); 

itemTrigger.addEventListener("click", function(){
    mainMenuToggle.classList.toggle("is-active");
    hamburgerToggle.classList.toggle("is-active");

    console.log("activated hide");
})
