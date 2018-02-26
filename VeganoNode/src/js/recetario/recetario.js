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
  $('.btn-outline-success').on('click', function() {
    $(this).addClass('btn-success');
    $(this).removeClass('btn-outline-success');
  });
  $('.btn-outline-info').on('click', function() {
    $(this).addClass('btn-info');
    $(this).removeClass('btn-outline-info');
  });
  $('.btn-outline-warning').on('click', function() {
    $(this).addClass('btn-warning');
    $(this).removeClass('btn-outline-warning');
  });
  //DES-ILUMINAR
  $('.btn-success').on('click', function() {
    $(this).addClass('btn-outline-success');
    $(this).removeClass('btn-success');
  });
  $('.btn-info').on('click', function() {
    $(this).addClass('btn-outline-info');
    $(this).removeClass('btn-info');
  });
  $('.btn-warning').on('click', function() {
    $(this).addClass('btn-outline-warning');
    $(this).removeClass('btn-warning');
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
