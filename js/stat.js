var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 50;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, 'white');

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 120, 30);
    ctx.fillText('Список результатов:', 120, 50);

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillText('Ivan', 140, 250);
    ctx.fillRect(140, 70, 50, 150);
};
