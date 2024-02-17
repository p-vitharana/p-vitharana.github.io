function darklightswitch() {
  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
    element.classList.toggle("light-mode");
  });

  var element2 = document.querySelector('.topnav');
  element2.classList.toggle("light-mode-shadow1");

  var element3 = document.querySelector('footer');
  element3.classList.toggle("light-mode-shadow2");
}
