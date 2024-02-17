function darklightswitch() {
  var elements = document.querySelectorAll("body");
  elements.forEach(function(element) {
    element.classList.toggle("light-mode");
  });

  var element2 = document.querySelector(".topnav");
  element2.classList.toggle("light-mode-shadow1");
  
  var element3 = document.querySelector("footer");
  element3.classList.toggle("light-mode-shadow2");

  var element4 = document.querySelector(".topnav a:hover");
  element4.classList.toggle("light-mode2");
  
  var element5 = document.querySelectorAll(".topnav a");
  element5.forEach(function(element) {
    element.classList.toggle("light-mode3");
  });

  var element6 = document.querySelector(".topnav a:active");
  element6.classList.toggle("light-mode4");

  var element7 = document.querySelector(".heading2")
  element7.classList.toggle("light-mode5")
}


