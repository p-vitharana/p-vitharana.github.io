const toggleSwitch = document.getElementById("modeToggle");

toggleSwitch.addEventListener('change', function() {
  if(this.checked) {
    document.body.classList.add("light-mode");
    document.*.classList.add("light-mode2")
    document..topnav.classList.add("light-mode3")
    document..topnav a.add("light-mode4")
    document..topnav a:hover.add("light-mode5")
    document..topnav a:active.add("light-mode6")
  } else {
    document.body.classList.remove('light-mode');
    document.*.classList.remove("light-mode2")
    document..topnav.classList.remove("light-mode3")
    document..topnav a.remove("light-mode4")
    document..topnav a:hover.remove("light-mode5")
    document..topnav a:active.remove("light-mode6")
  }    
});
