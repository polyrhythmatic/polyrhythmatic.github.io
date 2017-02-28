function setBg(div) {
  var index = Math.floor(Math.random() * 26) + 1;
  div.style.backgroundImage = "url(\"../assets/images/pattern_" + index + ".svg\")";
  div.style.backgroundColor = "white";
}

var elements = document.getElementsByClassName("front-page__project-bg");

for(var i = 0, iMax = elements.length; i < iMax; i ++){
  setBg(elements[i]);
};