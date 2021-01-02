$(".navbarInside").hide();
$(".menuClose").hide();

$(".menu").click(function() {

  $(".navbarInside").slideToggle();
  $(".menu").hide();
  $(".menuClose").show();
  $(".firstImg").removeClass("introImg");
})

$(".menuClose").click(function() {

  $(".navbarInside").slideToggle();
  $(".menuClose").hide();
  $(".menu").show();
  $(".firstImg").addClass("introImg");
})
