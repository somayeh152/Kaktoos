$(function(){

  $(window).scroll(function(){

    var top = $(this).scrollTop();
    if (top >= 680) {
      // $(".navbar-brand>h1").css("color","#fff");
      // $(".navbar-toggle>i").css("color","#fff");
      // $("#menu a").css("color","#fff");
      // $(".navbar-default").css("background-color","#000");

      // $(".navbar-brand>h1").css("color","#ff9600");
      // $(".navbar-toggle>i").css("color","#ff9600");
      // $("#menu a").css("color","#ff9600");
      // $(".navbar-default").css({"padding-top":"10px","padding-bottom":"10px","background-color":"#0a0a0a"});

      $(".navbar-brand>h1").css("color","#ff9600");
      $(".navbar-toggle>i").css("color","#ff9600");
      $("#menu a").css("color","#ff9600");
      $(".navbar-default").stop().animate({"paddingTop":"10px","paddingBottom":"10px"},400);
      $(".navbar-default").css("background-color","#1c1c1c");
    }
    else {
      // $(".navbar-brand>h1").css("color","#000");
      // $(".navbar-toggle>i").css("color","#000");
      // $("#menu a").css("color","#000");
      // $(".navbar-default").css("background-color","transparent");

      // $(".navbar-brand>h1").css("color","#ff9600");
      // $(".navbar-toggle>i").css("color","#ff9600");
      // $("#menu a").css("color","#ff9600");
      // $(".navbar-default").css({"padding-top":"20px","padding-bottom":"20px","background-color":"rgba(0, 0, 0, 0.3)"});

      $(".navbar-brand>h1").css("color","#ff9600");
      $(".navbar-toggle>i").css("color","#ff9600");
      $("#menu a").css("color","#ff9600");
      $(".navbar-default").stop().animate({"paddingTop":"20px","paddingBottom":"20px"},400);
      $(".navbar-default").css("background-color","rgba(0, 0, 0, 0.3)");
    }
  });

  $(".service-option>i").hover(function(){
    $(this).css("color","#ff9600");
  }, function(){
    $(this).css("color","#000");
  });

  $(".posts").hover(function(){
    // $(this).css({"margin-top":"0px","box-shadow":"0px 0px 15px rgba(70, 70, 70, 0.3)"});
    $(this).css({"box-shadow":"0px 0px 10px rgba(70, 70, 70, 0.5)"});
     // $("img").css({"border-color":"red","padding":"0px"});
  }, function(){
    // $(this).css({"margin-top":"15px","box-shadow":"0px 0px 5px rgba(70, 70, 70, 0.3)"});
    $(this).css("box-shadow","0px 0px 5px rgba(70, 70, 70, 0.3)");
    // $("img").css({"border-color":"#ddd","padding":"5px"});
  });

});
