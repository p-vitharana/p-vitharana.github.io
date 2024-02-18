const toggleSwitch = document.getElementById("modeToggle");

toggleSwitch.addEventListener('change', function() {
  if(this.checked) {
    document.body.classList.add("light-mode");
    document.*.classList.add("lightmode2");
    document.querySelector(".topnav").classList.add("lightmode3");
    const topNavLinks = document.querySelectorAll(".topnav a");
    topNavLinks.forEach(link => link.classList.add("lightmode4"));
    const topNavHover = document.querySelectorAll(".topnav a:hover");
    topNavHover.forEach(link => link.classList.add("lightmode5"));
    const topNavActive = document.querySelectorAll(".topnav a:active");
    topNavActive.forEach(link => link.classList.add("lightmode6"));
  } else {
    document.body.classList.remove('light-mode');
    document.*.classList.remove("lightmode2");
    document.querySelector(".topnav").classList.remove("lightmode3");
    const topNavLinks = document.querySelectorAll(".topnav a");
    topNavLinks.forEach(link => link.classList.remove("lightmode4"));
    const topNavHover = document.querySelectorAll(".topnav a:hover");
    topNavHover.forEach(link => link.classList.remove("lightmode5"));
    const topNavActive = document.querySelectorAll(".topnav a:active");
    topNavActive.forEach(link => link.classList.remove("lightmode6"));
  }    
});
