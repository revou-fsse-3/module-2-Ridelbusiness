
const hamburger = document.querySelector(".hamburger");
let menuOpen = false;

const menuMobile = document.querySelector(".navbarMobile");
const menuHeader = document.querySelector(".navbarLink");

const switchMode = document.querySelector(".switch");
const modeToggle1 = document.getElementById("modeToggle1");
const modeToggle2 = document.getElementById("modeToggle2");
let modeLight = false;




document.addEventListener('DOMContentLoaded', function () {
    
    let isLightMode = localStorage.getItem('light') === 'true';
    let isChecked = localStorage.getItem('rememberMe') === 'true';

    
    setMode(isLightMode);

    modeToggle1.checked = isChecked;
    modeToggle2.checked = isChecked;

    
    modeToggle1.addEventListener('click', function () {
        
        isLightMode = !isLightMode;
        modeToggle2.checked = true;
        setMode(isLightMode);
        
        localStorage.setItem('light', isLightMode);
        localStorage.setItem('rememberMe', modeToggle1.checked);
    });

    modeToggle2.addEventListener('click', function () {
        
        isLightMode = !isLightMode;
        modeToggle1.checked = true;
        setMode(isLightMode);
        
        localStorage.setItem('light', isLightMode);
        localStorage.setItem('rememberMe', modeToggle2.checked);
    });


    function setMode(isLightMode) {
        document.body.classList.toggle("light", isLightMode);
        
    }
});






hamburger.addEventListener("click", () =>{
    if(!menuOpen){
        hamburger.classList.add("open");
        menuOpen = true;
    }else{
        hamburger.classList.remove("open");
        menuOpen = false;
    }
});


hamburger.addEventListener("click", function () {
    if (menuMobile.style.display === "block") {
        menuMobile.style.display = "none";
    } else {
        menuMobile.style.display = "block";
    }
});

window.addEventListener("scroll", function () {
    if (menuMobile.style.display === "block") {
      // Close the menu if open when scrolling down
      menuMobile.style.display  = 'none';

      hamburger.classList.remove("open");
        menuOpen = false;
      
    }
  });


function handleWindowResize() {
    const windowWidth = window.innerWidth; 
    
  
    if (windowWidth >= 768) {
        menuHeader.style.display = "flex";
        menuMobile.style.display = "none";
    } else {
        menuHeader.style.display = "none";
    }
  }
  
window.addEventListener("resize", handleWindowResize);
  
handleWindowResize();
  


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const username = document.getElementById("username").values;
    const email = document.getElementById("email").values;
    const password = document.getElementById("password").values;
    
    console.log(username);
    console.log(email);
    console.log(password);
});
