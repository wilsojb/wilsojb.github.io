$(document).ready(function(){
  
  // scale fix for iPhone
  var metas = document.getElementsByTagName('meta');
  var i;
  if (navigator.userAgent.match(/iPhone/i)) {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    }
    document.addEventListener("gesturestart", gestureStart, false);
  }

  // declare variables for sections and tabs
  var projects = $("section#projects"),
    about = $("section#about"),
    pAnchor = $("a#projects"),
    aAnchor = $("a#about"),
    title = $("#title");

  // display "About" section
  about.show();
  aAnchor.addClass("highlight");

  // connect "About" anchor to section
  aAnchor.click(function(){
    if (aAnchor.hasClass("highlight")) {
      return false;
    }
    pAnchor.removeClass("highlight");
    aAnchor.addClass("highlight");
    projects.fadeOut(500, function(){
      about.fadeIn(500);  
    });
    return false;
  });

  // connect "Projects" anchor to section
  pAnchor.click(function(){
    if (pAnchor.hasClass("highlight")) {
      return false;
    }
    aAnchor.removeClass("highlight"); 
    pAnchor.addClass("highlight");
    about.fadeOut(500, function(){
      projects.fadeIn(500);  
    });
    return false;
  });

  // connect title to "About" section
  title.click(function(){
    if (aAnchor.hasClass("highlight")) {
      return false;
    }
    pAnchor.removeClass("highlight"); 
    aAnchor.addClass("highlight");
    dd.fadeOut(500);
    projects.fadeOut(500, function(){
      about.fadeIn(500);  
    });
    return false;
  });
});


function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
