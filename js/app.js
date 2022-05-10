$(document).ready(inicio);

function inicio() {
  $("#imgplayers").mouseenter(cambiarImg);
  $("#imgplayers").mouseleave(originalImg);
}

function cambiarImg() {
  $("#imgplayers").css(
    "background-image",
    "url(../proyectoCarabelas/img/2016/leonTomeo2.jpeg)"
  );
}
function originalImg() {
  $("#imgplayers").css(
    "background-image",
    "url(../proyectoCarabelas/img/2016/leonTomeo.jpeg)"
  );
}
