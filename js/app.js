
$(document).ready(inicio());

function inicio() {
  $("#imgplayers").mouseenter(cambiarImg);
  $("#imgplayers").mouseleave(originalImg);
}

function cambiarImg() {
  $("#imgplayers img").attr("src",'../img/2016/leonTomeo2.jpg');
}

function originalImg() {
  $("#imgplayers img").attr("src",'../img/2016/leonTomeo.jpeg')
}