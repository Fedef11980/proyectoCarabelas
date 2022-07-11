$(document).ready(function() {
// Cuando entra mouse, obtengo la data-src-secundaria y la pongo como src  
  $('.fotocambia').mouseenter(function () {
    var srcSecundaria = $(this).attr('data-src-secundaria');
    $(this).attr('src', srcSecundaria);
  });
  // Cuando sale mouse, obtengo la data-src-primaria y la pongo como src
  $('.fotocambia').mouseleave(function () {
    var srcPrimaria = $(this).attr('data-src-primaria');
    $(this).attr('src', srcPrimaria);
  });

});