// JavaScript Document
console.log("hi");

/******************/
/* HAMBURGER MENU */
/******************/

var MenuButton = document.querySelector("body > header > button");
MenuButton.addEventListener("click", openMenu);

var deNav = document.querySelector("body > header > nav");

function openMenu() {
    deNav.classList.add("toonMenu");
}
  
var SluitButton = document.querySelector("header > nav > button");
SluitButton.addEventListener("click", sluitMenu);
  
function sluitMenu(){
    deNav.classList.remove("toonMenu");
}
