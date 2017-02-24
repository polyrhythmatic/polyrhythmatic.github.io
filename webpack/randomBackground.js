var $ = require("jquery");

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