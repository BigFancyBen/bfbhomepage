logo = document.getElementById("logo");
let STAR_COLORS = ["#ffffff", "#ffe9c4", "#d4fbff"];

let canvas = document.getElementById('canvas');
canvas.width = 1.2 * document.body.clientWidth;
canvas.height = 1.2 * document.body.clientHeight;
let WIDTH = canvas.width;
let HEIGHT = canvas.height;

drawStars();


window.onload = function() {
  setTimeout(function(){
    logo.className +=" logo-animate";
  }, 1000);
}

function drawStars() {
  var context = canvas.getContext('2d');

  createSpace(context, 300);
}

function random (min, max) {
  return Math.round((Math.random() * max - min) + min);
}

function createSpace (context, star_number) {
  var x,
      y,
      brightness,
      radius;

  context.fillStyle = "#00083d";
  context.fillRect(0, 0, WIDTH, HEIGHT);

  context.save();

  for (var i = 0; i < star_number; i++) {
    x = Math.random() * WIDTH;
    y = Math.random() * HEIGHT;
    radius = Math.random() * 1.1;
    brightness = random(80, 100) / 100;

    context.beginPath();
    context.fillStyle = STAR_COLORS[random(0, STAR_COLORS.length)];
    context.globalAlpha = brightness;
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }
  context.restore();
}