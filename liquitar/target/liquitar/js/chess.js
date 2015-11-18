// JavaScript Document
var lines = 15;
var r = 13;
var block = 30;
var minInt = 15;
var maxInt = 475;
var paint;
function paintBackground(ctx){
	paint = ctx;
	ctx.fillStyle="#B8860B";
	ctx.fillRect(0,0,640,640);
	
	for(var i = 1;i<=lines;i++){
		ctx.moveTo(block,i*block);
		ctx.lineTo(lines*block,i*block);
		ctx.stroke();
		ctx.moveTo(i*block,block);
		ctx.lineTo(i*block,lines*block);
		ctx.stroke();
		pointArray[i-1] = new Array();
		for(var j=1;j<=lines;j++){
			var point = {"x":block*i,"y":block*j};
			pointArray[i-1][j-1] = point;
		}
	}
}
function paintCircle(point){
	paint.fillStyle="#00FF00";
	paint.beginPath();
	paint.arc(point.x,point.y,r,0,Math.PI*2,false);
	paint.closePath();
	paint.fill();
}
function judgeInCircle(circle,point){
	var rq = r*r;
	var len = (circle.x-point.x)*(circle.x-point.x)+(circle.y-point.y)*(circle.y-point.y);
	return rq >= len;
}

function clickHandler(event){
	var cx = event.x;
	var cy = event.y;
	if(cx<minInt||cx>maxInt||cy<minInt||cy>maxInt){
		return false;	
	}
	var fx = Math.floor(cx/block);
	var fy = Math.floor(cy/block);
//	var closeArray = new Array();
	for(var i=0;i<2;i++){
//		closeArray[i] = new Array();
		for(var j=0;j<2;j++){
			var circle = {"x":block*(fx+i),"y":block*(j+fy)};
//			closeArray[i][j] = circle;
			var point = {"x":cx,"y":cy};
			var isPaint = judgeInCircle(circle,point);
			if(isPaint){
				paintCircle(circle);
			}
		}
	}
}