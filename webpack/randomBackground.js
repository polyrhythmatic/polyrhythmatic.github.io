var OFFSET_AMOUNT = 100;

function setBg(div, num) {
  if(num === undefined) num = Math.floor(Math.random() * 26) + 1;
  div.style.backgroundImage = "url(\"../assets/images/pattern_" + num + ".svg\")";
  div.style.backgroundColor = "white";
}

var elements = document.getElementsByClassName("front-page__project-bg");

for(var i = 0, iMax = elements.length; i < iMax; i ++){
  setBg(elements[i]);
};

// var projects = document.getElementsByClassName("front-page__project-cascade");

// window.addEventListener("load",function(event) {
//   for(var i = 0, iMax = projects.length; i < iMax; i ++){
//     var elements = projects[i].getElementsByClassName("cascade-element");
//     var index = Math.floor(Math.random() * 26) + 1;
//     var topBase = parseFloat(window.getComputedStyle(elements[0]).top.replace("px", ""));
//     var leftBase = parseFloat(window.getComputedStyle(elements[0]).left.replace("px", ""));
//     var topDir = Math.random() > 0.5 ? 1 : -1;
//     var leftDir = Math.random() > 0.5 ? 1 : -1;
//     setBg(elements[0], index);
//     for(var j = 1, jMax = elements.length; j < jMax; j ++){
//       setBg(elements[j], index);
//       elements[j].style.top = parseFloat(window.getComputedStyle(elements[j]).top.replace("px", "")) + Math.abs(Math.random()) * OFFSET_AMOUNT * topDir + "px";
//       elements[j].style.left = parseFloat(window.getComputedStyle(elements[j]).left.replace("px", "")) + Math.abs(Math.random()) * OFFSET_AMOUNT * leftDir + "px";
//     };
//   };
//   body.style.zIndex = 1;
// });