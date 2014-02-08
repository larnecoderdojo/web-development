var turtleIcon = new Image();
var turtleIconWidth = 23;
var turtleIconHeight = 32;

function drawTurtleIcon() {
    var canvas = document.getElementById("turtleIconOverlay");
    var ctx = canvas.getContext("2d");
    turtleIcon.onload = function() {
      ctx.translate(250, 250);
      ctx.drawImage(turtleIcon, -turtleIconWidth/2, -turtleIconHeight/2);
    };
    turtleIcon.src = 'turtle.png';
}

function moveTurtleIcon(distance) {
    var canvas = document.getElementById("turtleIconOverlay");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(-turtleIconWidth, -turtleIconHeight, turtleIconWidth * 2, turtleIconHeight * 2);
    ctx.translate(0, distance);
    ctx.drawImage(turtleIcon, -turtleIconWidth/2, -turtleIconHeight/2);
}

function rotateTurtleIcon(degrees) {
    var canvas = document.getElementById("turtleIconOverlay");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(-turtleIconWidth, -turtleIconHeight, turtleIconWidth * 2, turtleIconHeight * 2);
    ctx.rotate(degrees * (Math.PI / 180));
    ctx.drawImage(turtleIcon, -turtleIconWidth/2, -turtleIconHeight/2);
}