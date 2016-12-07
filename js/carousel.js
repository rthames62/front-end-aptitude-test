$("#next").on("click", function(){
  if($("div#first").hasClass("active")){
    $("div#first").fadeOut("slow", function(){
      $("div#first").removeClass("active");
    });
    $("div#second").fadeIn("slow", function(){
      $("div#second").addClass("active");
    });
  } else {
    $("div#second").fadeOut("slow", function(){
      $("div#second").removeClass("active");
    });
    $("div#first").fadeIn("slow", function(){
      $("div#first").addClass("active");
    });
  }
})

$("#prev").on("click", function(){
  if($("div#first").hasClass("active")){
    $("div#first").fadeOut("slow", function(){
      $("div#first").removeClass("active");
    });
    $("div#second").fadeIn("slow", function(){
      $("div#second").addClass("active");
    });
  } else {
    $("div#second").fadeOut("slow", function(){
      $("div#second").removeClass("active");
    });
    $("div#first").fadeIn("slow", function(){
      $("div#first").addClass("active");
    });
  }
})
