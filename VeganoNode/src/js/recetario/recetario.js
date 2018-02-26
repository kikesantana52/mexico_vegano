$(document).ready(function() {
  var bool_extendida = false;

  //Efecto de solidificación
  $('#main').hover(function() {
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
  // Pasar del intro al main para seleccionar los filtros
  $('#btn-to-filter').on('click',function() {
    $('#intro').css({'max-height':'0%' });
    $('#main').css({'height':'100%','max-height':'100%'});
  });
  // ILUMINAR
  $('.btn-outline-vegan').on('click', function() {
    $(this).addClass('btn-vegan');
    $(this).removeClass('btn-outline-vegan');
  });
  $('.btn-outline-lila').on('click', function() {
    $(this).addClass('btn-lila');
    $(this).removeClass('btn-outline-lila');
  });
  //DES-ILUMINAR
  $('.btn-vegan').on('click', function() {
    $(this).addClass('btn-outline-vegan');
    $(this).removeClass('btn-vegan');
  });
  $('.btn-lila').on('click', function() {
    $(this).addClass('btn-outline-lila');
    $(this).removeClass('btn-lila');
  });

  //PASAR DE LOS FILTROS A LOS RESULTADOS
  $('#btn-to-recepies').on('click',function() {
    $('#mega').css({'max-height':'0%'});
    $('#mega2').css({'height': 'auto','max-height':'800%'});
  });

  $('#NewFilter').on('click',function() {
    $('#mega2').css({'max-height':'0%','height' : '0'});
    $('#mega').css({'max-height' : "100%"});
  });


});
