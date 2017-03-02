---
layout: page
title: Maze2
permalink: /maze2/
poster: /assets/front_page_videos/maze2.jpg
vid: /assets/front_page_videos/maze2.mp4
description: A procedural virtual reality experiment in generative realities. Generative terrain and music combine to create an endless environment.
---
{% include video.html url="https://player.vimeo.com/video/149098758"%}

Made with [Gene Han](http://getarobo.com/) for Oculus Gear VR.

Maze2 is a VR game and experience as an experiment in generative virtual realities, realized through three unique levels each designed to question the philosophy of perception. Maze2 seeks to address questions such as the existence of objects outside our perception ­ questions asked by philosophers since the beginning of thought. Using virtual reality, Maze2 creates a world where these situations are generated and explores what that means for the end user. What if objects out of sight are in constant flux?

![photo]({{ site.url }}/assets/maze2/images/maze2_1.png)

Maze2 is also an experiment in procedural design. Throughout the experience, generative algorithms are used extensively to create the landscape, behavior, and sound of the environment. In level one, a maze building algorithm is used to create a maze which updates and rebuilds whichever section of the maze is outside players view. In the second level, a spherical maze is created using a complex algorithm, and music is generated and effected on the fly using L­system fractals. The final phase (in development) generates a maze on a 3­D moebius strip, with no end to the maze. All music and visuals were created by Seth and Gene.

Below is a Unity Web Player version of the second level. Click continuously to move forward, and use the left and right arrow keys for direction. Requires the Unity Plugin and Firefox, Safari, or IE (no Chrome support).
<script
  src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
  integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
  crossorigin="anonymous"></script>
 
<script type="text/javascript">
var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
if (document.location.protocol == 'https:')
  unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');
</script>
<script type="text/javascript">
  var config = {
    width: 960, 
    height: 600,
    params: { enableDebugging:"0" }
    
  };
  var u = new UnityObject2(config);

  jQuery(function() {

    var $missingScreen = jQuery("#unityPlayer").find(".missing");
    var $brokenScreen = jQuery("#unityPlayer").find(".broken");
    $missingScreen.hide();
    $brokenScreen.hide();
    
    u.observeProgress(function (progress) {
      switch(progress.pluginStatus) {
        case "broken":
          $brokenScreen.find("a").click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            u.installPlugin();
            return false;
          });
          $brokenScreen.show();
        break;
        case "missing":
          $missingScreen.find("a").click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            u.installPlugin();
            return false;
          });
          $missingScreen.show();
        break;
        case "installed":
          $missingScreen.remove();
        break;
        case "first":
        break;
      }
    });
    u.initPlugin(jQuery("#unityPlayer")[0], "{{ site.baseurl }}/assets/maze2/attachments/first.unity3d");
  });

  // jQuery(window).resize(function(){
  //   debugger;
  //   winWidth = window.innerWidth;
  //   winHeight = window.innerHeight;
  //   var unity = document.getElementById('unityPlayer');
  //   if(unity != null){
  //     unity.style.width = winWidth + "px";
  //     unity.style.height = winHeight + "px";
  //   }
  // });
</script>
<div class="content">
  <div id="unityPlayer">
    <div class="missing">
      <a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now!">
        <img alt="Unity Web Player. Install now!" src="http://webplayer.unity3d.com/installation/getunity.png" width="193" height="63" />
      </a>
    </div>
    <div class="broken">
      <a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now! Restart your browser after install.">
        <img alt="Unity Web Player. Install now! Restart your browser after install." src="http://webplayer.unity3d.com/installation/getunityrestart.png" width="193" height="63" />
      </a>
    </div>
  </div>
</div>