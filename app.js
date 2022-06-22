
let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");
    var htmlGrab = document.querySelector("html");
    const hamburger = document.querySelector('.hamburger');

    hamburger.classList.toggle('is-active');

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible";
      getSidebarVisibility.style.pointerEvents = "initial";

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      htmlGrab.classList.add("clicked");
      toggleNavStatus = true;
      servicesUL.classList.add("clicked");
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        htmlGrab.classList.remove("clicked");
        toggleNavStatus = false;
        servicesUL.classList.remove("clicked");
        getSidebarVisibility.style.pointerEvents = "none";
    }
}


// ------------------------------------------------- DARK MODE -----------------------------

/* Body and Core Elements */
var body = document.querySelector("body");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
// for an optional footer dark mode button as well
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// This is where you add the dakr mode class.  When the dark mode is enabled as true in localstorage,
// it will add all the dark-mode classes to the elements we created in the variables above
const enableDarkMode = () => {

// Core dark mode styles
body.classList.add("dark-mode");
localStorage.setItem("darkMode", "enabled")
}

// This is where we remove dark mode.  Just copy and paste all the lines where you added a class
// and paste them into this function, then change "addClass" to "removeClass"
const disableDarkMode = () => {

body.classList.remove("dark-mode");
localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
enableDarkMode();
}

// add event listener to the dark mode button toggle
// darkModeToggle.addEventListener('click', () => {
// // on click, check localstorage for the dark mode value
// darkMode = localStorage.getItem("darkMode");
// if (darkMode !== "enabled") {
//   // if dark mode is not enabled, run this function to set it to enabled
//   enableDarkMode();
// } else {
//   // if dark mode is enabled, run this function to set it to disabled
//   disableDarkMode();
// }
// })

// ------------------------------------------------- CUSTOM -----------------------------

let projectButtons = Array.from(document.querySelectorAll(".projects-button"));
let projectImages = Array.from(document.querySelectorAll(".mobile-project-image"));
let desktopProjectImage = document.querySelector(".desktop-project-image");

let currIndex = 0;

let screenWidth = window.innerWidth;

const updateScreenWidth = () => {
  let prevWidth = screenWidth
  screenWidth = window.innerWidth
  if (screenWidth > 1080 && prevWidth < 1080) {
    desktopProjectImage.src = projectImages[currIndex].src;
    projectImages[currIndex].classList.toggle("project-image-active");
    if (currIndex !== 0) projectImages[0].classList.remove('project-image-active')
  }

  if (screenWidth < 1080 && prevWidth > 1080) {
    desktopProjectImage.classList.toggle("project-image-active");
    projectImages[currIndex].classList.toggle("project-image-active");
    console.log('test')
  }
}

window.addEventListener('resize', updateScreenWidth);

projectButtons.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (screenWidth < 1024) {
      projectButtons[currIndex].classList.toggle("project-button-active");
      projectImages[currIndex].classList.toggle("project-image-active");
      projectButtons[index].classList.toggle("project-button-active");
      projectImages[index].classList.toggle("project-image-active");

      currIndex = index;
    } else {
      desktopProjectImage.style.opacity = 0
      setTimeout(() => {
        desktopProjectImage.style.opacity = 1
        desktopProjectImage.src = projectImages[index].src;
      }, 200)
      projectButtons[currIndex].classList.toggle("project-button-active");
      projectButtons[index].classList.toggle("project-button-active");
      currIndex = index;
    }
  }
  )
})