$(document).ready(inicio());

function inicio() {
  $("#imgplayers").mouseenter(cambiarImg());
  $("#imgplayers").mouseleave(originalImg());
}

function cambiarImg() {
  $("#imgplayers").src = '../img/2016/leonTomeo2.jpeg';
  console.log("cambiar", cambiarImg);
}

function originalImg() {
  $("#imgplayers").src = '../img/2016/leonTomeo.jpeg';
  console.log("original", originalImg);
}
