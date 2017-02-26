var inView = require("in-view");
inView.threshold(1);

function onEnter(el){
  el.play();
  el.setAttribute("style", "filter: none");
}

function onExit(el){
  el.pause();
  el.setAttribute("style", "filter: grayscale(100%)");
}

if (/Mobi/.test(navigator.userAgent)) {
  inView(".front-page__project-video")
    .on("enter", onEnter)
    .on("exit", onExit);
}
