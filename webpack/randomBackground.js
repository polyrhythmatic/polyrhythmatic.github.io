function setBg(div) {
  var index = Math.floor(Math.random() * 26) + 1;
  div.style.backgroundImage = "url(\"../assets/images/pattern_" + index + ".svg\")";
  div.style.backgroundColor = "white";
}

// var elements = document.getElementsByClassName("front-page__project-bg");

// for(var i = 0, iMax = elements.length; i < iMax; i ++){
//   setBg(elements[i]);
// };

var projects = document.getElementsByClassName("front-page__project-cascade");

window.addEventListener("load",function(event) {
  for(var i = 0, iMax = projects.length; i < iMax; i ++){
    var elements = projects[i].getElementsByClassName("front-page__project-bg");
    for(var j = 0, jMax = elements.length; j < jMax; j ++){
      setBg(elements[j]);
      // elements[j].style.top = parseFloat(window.getComputedStyle(elements[j]).top.replace("px", "")) + Math.random() * 100 + "px";
      // elements[j].style.left = parseFloat(window.getComputedStyle(elements[j]).left.replace("px", "")) + Math.random() * 100 + "px";
    };
  };  
});