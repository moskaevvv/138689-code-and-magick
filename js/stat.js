window.renderStatistics = function (ctx, names, times) {
    'use strict';
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    
    ctx.fillStyle = 'rgb(256, 256, 256)';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);
    
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.textAlign = 'left';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
    
    var max = -1;
    
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
        }
    };
    
    var histoHeight = 150;
    var step = histoHeight / max;
    var columnX = 40;
    var betweenColumns = 50;
    var columnCornerX = 155;
    var columnCornerY = 245;
    ctx.textAlign = 'center';
    
    for (var i = 0; i < times.length; i++) {
        var name = names [i];
        var time = times [i];
        
        var height = step * time;
        
        ctx.fillStyle = '#000';
        ctx.fillText(time.toFixed(0), columnCornerX + columnX / 2, columnCornerY - height - 10 );
        
        if (name === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0, 0, ' + ((Math.random() * 5) *50).toFixed(0) + ', 1)';
        };
        
        ctx.fillRect(columnCornerX, columnCornerY - height, columnX, height);
        
        ctx.fillStyle = '#000';
        ctx.fillText(name, columnCornerX + columnX / 2, columnCornerY + 22 );
        
        var columnCornerX = columnCornerX + 90;
    };
    

};