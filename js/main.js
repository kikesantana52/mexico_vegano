// var controller = new ScrollMagic.Controller();
//
// var scene = new ScrollMagic.Scene({
//   triggerElement: '#bar-2'
// }).setTween('#semilla',1,{display: 'block'})
// .addTo(controller);
//


$(document).ready(function() {

var flag = false;
var scroll;

    $(window).scroll(function() {
       scroll = $(window).scrollTop();
       if (scroll>1000) {
         if(!flag){
           $(".logo").css({"margin-top" : "0","width":"50px","height" : "50px"});
           flag = true;
         }
       }else{
         if (flag) {
           $(".logo").css({"margin-top" : "50%","width":"250px","height" : "250px"});
           flag = false;
         }

       }
    });
});
