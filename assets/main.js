$(document).ready(function(){

  // Start with no visible subheader
  $("#subheader_about").fadeOut(0);
  $("#subheader_process").fadeOut(0);
  $("#subheader_partner").fadeOut(0);
  // var topHovered = false;
  // var subHovered = false;

  // Hovering makes subheader appear
  $("#about").hover(function(){         // ABOUT
    $("#subheader_about").fadeIn(300);
    $("#subheader_about").hover(function(){
      $("#about").addClass("hovered_a");
      $("#about").attr("style", "color: #ffc299; border-bottom: 8px solid #ffc299");
      $("#subheader_about").fadeIn(0);
    }, function() {
      $("#about").removeClass("hovered_a");
      $("#about").attr("style", "");
      $("#subheader_about").fadeOut(0);
    });
  }, function() {
    $("#subheader_about").fadeOut(0);
  });


});
