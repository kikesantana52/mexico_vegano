// var controller = new ScrollMagic.Controller();
//
// var scene = new ScrollMagic.Scene({
//   triggerElement: '#bar-2'
// }).setTween('#semilla',1,{display: 'block'})
// .addTo(controller);
//


$(document).ready(function() {

var bool_flag = false;
var obj_scroll;

    $(window).scroll(function() {
       obj_scroll = $(window).scrollTop();
       if (obj_scroll>1000) {
         if(!bool_flag){
           $(".logo").css({"margin-top" : "0","width":"50px","height" : "50px"});
           bool_flag = true;
         }
       }else{
         if (bool_flag) {
           $(".logo").css({"margin-top" : "50%","width":"250px","height" : "250px"});
           bool_flag = false;
         }

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
