var $ = require("jquery");

var inView = require("in-view");
$(function() {
    var $allVideos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube.com'], object, embed"),
    $fluidEl = $("article");
  $allVideos.each(function() {

    $(this)
      // jQuery .data does not work on object/embed elements
      .attr('data-aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
  });
  $(window).resize(function() {
    var newWidth = $fluidEl.width();
    $allVideos.each(function() {
      var $el = $(this);
      $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
    });
  }).resize();
});

var figure = $(".front-page__project-video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
  this.play();
};

function hideVideo(e) {
  this.pause();
};

function setBg(divs) {
  $(divs).each(function(div){
    var index = Math.floor(Math.random() * 26) + 1;
    $(divs[div]).css("background-image", "url(\"../images/pattern_" + index + ".svg\")");
  });
}

var elements = $(".front-page__project-cascade");
elements.each(function(index) {
  setBg($(elements[index]).find(".front-page__project-bg"));
});