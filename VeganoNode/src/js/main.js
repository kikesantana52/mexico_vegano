console.log("Si lo estoy cargando");
$(window).scrollTop(0);
$(document).ready(function() {


$('#irIndex').on('submit',function(e){
  e.preventDefault();
  if ($('#name').val()=='nico') {
    if($('#psw').val()=='veganost'){
     window.location.href = "index2.html";
    }
    else{
      alert("psw incorrecto");
    }
  }else{
    alert("usuario incorrecto");
  }
});
var bool_flag = false;
var obj_scroll;

    $(window).scroll(function() {
       obj_scroll = $(window).scrollTop();
       if (obj_scroll==0){
            $("#logo").css({"top" : "15%","background-size":"10%"});
            $('#goRight').css({"padding-right":".5em"});
            $('#goLeft').css({"padding-left":".5em"});
           $("#semilla").fadeOut();
          $("#semilla").addClass('bounceOut');
          $("#semilla").removeClass('bounceIn');
          $("#semilla_bg").fadeOut();

       }else
       if (obj_scroll>200 && obj_scroll<800) {
         $("#logo").css({"top" : "2%","background-size":"5%"});
         $('#goRight').css({"padding-right":"2em"});
         $('#goLeft').css({"padding-left":"2em"});

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
