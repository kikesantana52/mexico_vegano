$(window).scrollTop(0);
$(document).ready(function() {

var bool_flag = false;
var obj_scroll;

    $(window).scroll(function() {
       obj_scroll = $(window).scrollTop();
       if (obj_scroll==0){
           $(".logo").css({"margin-top" : "50%","width":"auto","height" : "250px"});
           $("#semilla").fadeOut();
          $("#semilla").addClass('bounceOut');
          $("#semilla").removeClass('bounceIn');
          $("#semilla_bg").fadeOut();

       }else
       if (obj_scroll>200 && obj_scroll<800) {
           $(".logo").css({"margin-top" : "0","width":"auto","height" : "50px"});
           $("#semilla>img").attr("src","img/nopal/SEMILLA_1.png");
           $("#semilla").show();
           $('#semilla').addClass('bounceIn');
           $('#semilla').removeClass('bounceOut');
           $("#semilla_bg").show();
           $('#semilla_bg').addClass('bounceIn');
           $('#semilla_bg').removeClass('bounceOut');

       }
    });


    /*** NAVBAR ANIMATION FUNCTIONS */
    var bool_barOpen = false;
    $('.menu-bar').on('click',function(){
      if (!bool_barOpen) {
        $('.navigate').animate({
          left: '0'
        });
        bool_barOpen = true;
      }else{
        $('.navigate').animate({
          left: '-100%'
        });
        bool_barOpen = false;
      }
    });
});
