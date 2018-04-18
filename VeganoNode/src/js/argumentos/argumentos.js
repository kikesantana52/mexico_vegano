$(document).ready(function() {

  $('.collapser').on('click',function(e){
    if (  $(this).text() == "Ver más...") {
      $("#" + $(this).data("target-text")).css({"height":"auto","-webkit-text-fill-color": "black"});
      $(this).text("Ver menos...")
    } else {
      $(this).text("Ver más...")
      $("#" + $(this).data("target-text")).css({"height":"100px","-webkit-text-fill-color": "transparent"});
    }
  });

  
}
