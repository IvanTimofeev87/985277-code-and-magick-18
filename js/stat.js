var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d');
canvas.width = 420;
canvas.height = 270;
ctx.fillRect(100, 10, 420, 270);
document.body.appendChild(canvas);



var renderStatistics = function(ctx, names, times) {};