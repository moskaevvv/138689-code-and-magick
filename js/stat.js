'use strict';



//RGBA-цвет плашки:
var shapeColor = [256, 256, 256, 1];

//RGBA-цвет тени:
var shadowColor = [0, 0, 0, 0.7];

//border — x-координата, y-координата, длина, высота:
var shapeBorder = [100, 10, 420, 270];
var shadowBorder = [0, 0, 0, 0];

//прямоугольники — x-координата, y-координата, длина, высота:
var shapeBody = [100, 10, 420, 270];
var shadowBody = [110, 20, 420, 270];

//координаты текста + HEX-цвет:
var textPositionX = shapeBody[0] + 20;
var textPositionY = shapeBody[1] + 30;
var textColor = '#000';

//параметры гистограммы и столбиков
var histoHeight = 150;
var columnWidth = 40;
var betweenColumns = 50; //расстояние между столбиками
var columnCornerY = 245; //вертикальная координата оснований столбиков 

//рандомный цвет столбиков:
var randomColor = function () {
    return ((Math.random() * 5) *50).toFixed(0);
};

//рисование облака-плашки:
var cloudDraw = function (ctx, fillColor, strokeParams, fillParams) {
    ctx.fillStyle = 'rgba(' + fillColor + ')';
    ctx.strokeRect(strokeParams[0], strokeParams[1], strokeParams[2], strokeParams[3]);
    ctx.fillRect(fillParams[0], fillParams[1], fillParams[2], fillParams[3]);
};

//поиск цены деления высоты столбиков:
var maxSearch = function (times) {
    var max = -1;
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
        max = time;
        };
    };
    return max;
};

//рисование текста:
var textDraw = function (ctx) {   
    ctx.fillStyle = textColor;
    ctx.font = '16px PT Mono';
    ctx.textAlign = 'left';
    ctx.fillText('Ура вы победили!', textPositionX, textPositionY);
    ctx.fillText('Список результатов:', textPositionX, textPositionY + 20);  
};

//рисование одного столбца:
var columnDraw = function (ctx, name, time, columnCornerX, height) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), columnCornerX + columnWidth / 2, columnCornerY - height - 10 );
       
    if (name === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
        ctx.fillStyle = 'rgb(0, 0, ' + randomColor() + ')';
    };
        
    ctx.fillRect(columnCornerX, columnCornerY - height, columnWidth, height);
        
    ctx.fillStyle = '#000';
    ctx.fillText(name, columnCornerX + columnWidth / 2, columnCornerY + 22 );
};

//сборка:
window.renderStatistics = function (canvas, names, times) {    
    
    cloudDraw(canvas, shadowColor, shadowBorder, shadowBody);
    cloudDraw(canvas, shapeColor, shapeBorder, shapeBody);
    textDraw(canvas);
    
       
    var step = histoHeight / maxSearch(times);
    
    var columnCornerX = shapeBody[0] + 55;
    
    for (var i = 0; i < times.length; i++) {
        var name = names[i];
        var time = times[i];
        var height = step * time;
    
        columnDraw(canvas, name, time, columnCornerX, height);
        
        var columnCornerX = columnCornerX + betweenColumns + columnWidth;
    };

};