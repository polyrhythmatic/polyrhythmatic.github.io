var $ = require("jquery");

var figure = $(".front-page__project-video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
  this.play();
};

function hideVideo(e) {
  this.pause();
};