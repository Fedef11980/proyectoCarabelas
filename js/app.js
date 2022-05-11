$(document).ready(inicio);

function inicio() {
  $("#imgplayers").mouseenter(cambiarImg);
  $("#imgplayers").mouseleave(originalImg);
}

function cambiarImg() {
  $("#imgplayers").attr("src", "../img/2016/leonTomeo2.jpg");
  console.log(cambiarImg);
}

function originalImg() {
  $("#imgplayers").attr("src", "../img/2016/leonTomeo.jpeg");
  console.log(originalImg);
}
