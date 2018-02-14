$(document).ready(function() {
  var bool_extendida = false;

  $('#filterBtn').on('click',()=>{
    $('.fa-arrow-up').toggleClass('hide');
    $('.fa-arrow-down').toggleClass('hide');
    if (bool_extendida) {
      $('#intro').css({'height':'120px'});
      bool_extendida = false;
    }else{
      $('#intro').css({'height':'360px'});
      bool_extendida = true;
    }


    $('.img-background').css({
      'background' : 'url("' + $(this).data('data-img') + '" no-repeat cover);'
    });
  });
});
