$(document).ready(function() {
  var bool_extendida = false;

  //Presionar el boton de filter para mostrar filtros
  // $('#filterBtn').on('click',()=>{
  //   $('.fa-arrow-up').toggleClass('hide');
  //   $('.fa-arrow-down').toggleClass('hide');
  //   if (bool_extendida) {
  //     $('#recepies').css({'padding-top':'8%'});
  //     bool_extendida = false;
  //   }else{
  //     $('#recepies').css({'padding-top':'50%'});
  //     bool_extendida = true;
  //   }
  //
  //
  //
  // });

  //Efecto de solidificación
  $('#intro').hover(function() {
    $('.dark-overlay').css('background','rgba(0,0,0,.9)')
  },function() {
    $('.dark-overlay').css('background','rgba(0,0,0,.5)')
  });

  //Obtener la informacion en 'data-imgsetter' y ponerla como background cover
  $('div.img-background').each(function(){
    $(this).css({
      'background':'url(' + $(this).data('imgsetter') + ')',
      'background-repeat':'no-repeat',
      'background-size':'cover',
      'background-position':'center'
  });

  });
});
