$(document).ready(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if(scroll >= 200){
      $("nav").addClass("scrolling");
    } else {
      $("nav").removeClass("scrolling");
    }
  })

  $("div.block").hover(function(){
    $(this).children("div.overlay").css("display", "flex");
  }, function(){
    $(this).children("div.overlay").css("display", "none");
  })

  $("button#mobileshare").on("click", function(){
    $("div#block2 div.overlay").css("display", "flex");
  });

  $("a#closeshare").on("click", function(){
    $("div#block2 div.overlay").css("display", "none");
  });

  $("a#modules").on("click", function(){
    $("html, body").animate({
      scrollTop : $("section#modules").offset().top
    })
  })
  $("a#video").on("click", function(){
    $("html, body").animate({
      scrollTop : $("section#video").offset().top
    })
  })
  $("a#map").on("click", function(){
    $("html, body").animate({
      scrollTop : $("section#map").offset().top
    })
  })
  $("a#home").on("click", function(){
    $("html, body").animate({
      scrollTop : 0
    })
  })
});
