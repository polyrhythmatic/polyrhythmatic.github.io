var videos = document.getElementsByClassName("front-page__project-video");

for(var i = 0, iMax = videos.length; i < iMax; i ++) {
  videos[i].addEventListener("mouseover",function() {
    this.play();
  },false);

  videos[i].addEventListener("mouseout", function() {
    this.pause();
  }, false);
}
