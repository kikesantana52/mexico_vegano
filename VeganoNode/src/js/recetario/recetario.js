$(document).ready(function() {
  var bool_extendida = false;

  //Presionar el boton de filter para mostrar filtros
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



  });

  //Efecto de solidificación
  $('#intro').hover(function() {
    $('.grey-overlay').css('background','rgba(125,125,125,.9)')
  },function() {
    $('.grey-overlay').css('background','rgba(125,125,125,.5)')
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
