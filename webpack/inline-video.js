var enableInlineVideo = require('iphone-inline-video');

window.addEventListener("load",function(event) {
  var videos = document.getElementsByTagName("video")
  for(var i = 0, iMax = videos.length; i < iMax; i ++){
    enableInlineVideo(videos[i]);
  }
});