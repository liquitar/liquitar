<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/liquitar.css">
		<link rel="shortcut icon" href="image/wu.png">
		<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/liquitar.js"></script>
		<title>CANVAS</title>
		<style type="text/css">
			body{
				min-width: 360px;
				overflow: scroll;
			}
		</style>
		<script type="text/javascript">
			/*
				五子棋为15条横线15条竖线，共有黑子113个白子112个
			*/
			var clientWidth = 360;
			var clientHeight = 640;
			var lineNumber = 15;
			var ctx ;
			var canvas;
			var lineDefine = {"startX":0,"startY":0,"endX":0,"endY":0};
			var selfColor = "#FFFFFF";
			var enemyColor = "#000000";
			var blockWidth = parseInt(clientWidth/(lineNumber+1));
			var chessRadius = parseInt(blockWidth/2)-3;
			var focusColor = "#FF0000";
			var lastPoint = null;
			var enemyLastPoint = null;
			function showWidth(){
				clientWidth = window.innerWidth;
				clientHeight = window.innerHeight;
			}
			function drawCanvas(){
				initCtx();
				drawBack();
				//先画竖线
				for(var i=0;i<lineNumber;i++){
					lineDefine.startX=blockWidth*(i+1);
					lineDefine.startY=blockWidth;
					lineDefine.endX=blockWidth*(i+1);
					lineDefine.endY=blockWidth*lineNumber;
					drawLine(lineDefine);
				}
				//再画横线
				for(var i=0;i<lineNumber;i++){
					lineDefine.startX=blockWidth;
					lineDefine.startY=blockWidth*(i+1);
					lineDefine.endX=blockWidth*lineNumber;
					lineDefine.endY=blockWidth*(i+1);
					drawLine(lineDefine);
				}
				//不知道为什么最后一笔颜色很浅
				/*lineDefine.startX=blockWidth;
				lineDefine.startY=blockWidth*lineNumber;
				lineDefine.endX=blockWidth*lineNumber;
				lineDefine.endY=blockWidth*lineNumber;
				drawLine(lineDefine);*/
				drawText("作者：liquitar,http://www.liquitar.com",blockWidth*(lineNumber+2));
				/*var point = {x:blockWidth*4,y:blockWidth*4};
				drawChess(point);
				point = {x:blockWidth*7,y:blockWidth*5};
				drawChess(point);
				drawChessFocus(point);*/
			}
			function initCtx(){
				canvas = document.getElementById("canvas");
				ctx = canvas.getContext("2d");
				bindMouseListener();
			}
			function drawBack(){
				ctx.fillStyle="#DDDDDD";
				// ctx.strokeRect(0,0,clientWidth,clientHeight);	//描边
				ctx.fillRect(0,0,clientWidth,clientHeight);		//填充
			}
			function drawLine(line){
				ctx.beginPath();
				ctx.strokeStyle="#000000"
				ctx.moveTo(line.startX,line.startY);
				ctx.lineTo(line.endX,line.endY);
				ctx.stroke();
			}
			function drawText(tips,textY){
				console.log(tips);
				ctx.fillStyle="#ff0000";
				ctx.font="14px Microsoft YaHei";
				var textWidth = parseInt(ctx.measureText(tips).width);
				console.log(ctx.measureText(tips).width);
				ctx.fillText(tips,parseInt((clientWidth-textWidth)/2),textY);
			}
			function drawChess(point,color){
				ctx.fillStyle=color;
				ctx.beginPath();
				ctx.arc(point.x,point.y,chessRadius,0,Math.PI*2,true);
				ctx.closePath();
				ctx.fill();
				ctx.save();
			}
			function drawChessFocus(point){
				ctx.beginPath();
				ctx.moveTo(point.x-3,point.y);
				ctx.lineTo(point.x+3,point.y);
				ctx.strokeStyle=focusColor;
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo(point.x,point.y-3);
				ctx.lineTo(point.x,point.y+3);
				ctx.strokeStyle=focusColor;
				ctx.stroke();
			}
			function bindMouseListener(){
				canvas.onmousedown = function(e){
					var x = e.pageX;
					var y = e.pageY;
					var box = canvas.getBoundingClientRect();
					// console.log("canvas width:"+canvas.width);
					// console.log("box width:"+box.width);
					// console.log("box left:"+box.left);
					// console.log("鼠标按下x:"+x+",y:"+y);
					x = x-box.left;
					y = y-box.top;
					if(x<blockWidth-chessRadius|| x>lineNumber*blockWidth+chessRadius||y>lineNumber*blockWidth+chessRadius||y<blockWidth-chessRadius){
						return;
					}
					clickDraw(x,y);
				}
			}
			function clickDraw(x,y){
				var xv = parseInt(x/blockWidth);
				var xp = parseInt(x%blockWidth);
				var yv = parseInt(y/blockWidth);
				var yp = parseInt(y%blockWidth);
				// console.log("xv:"+xv+";yv:"+yv);
				var p1 = {x:xv*blockWidth,y:yv*blockWidth};
				var ps = [];
				ps[0]=p1;
				var i=1;
				if(xp>0){
					var p2 = {x:(xv+1)*blockWidth,y:yv*blockWidth};
					ps[i]=p2;
					i++;
				}
				if(yp>0){
					var p3 = {x:xv*blockWidth,y:(yv+1)*blockWidth};
					ps[i]=p3;
					i++;
				}
				if(yp>0&&xp>0){
					var p4 = {x:(xv+1)*blockWidth,y:(yv+1)*blockWidth};
					ps[i]=p4;
					i++;
				}
				point = judgePoint(ps,x,y);
				if(point){
					if(lastPoint){
						drawChess(lastPoint,selfColor);
					}
					lastPoint = point;
					drawChess(point,selfColor);
					drawChessFocus(point);
				}

			}
			function drawEnemy(x,y){
				if(enemyLastPoint){
					drawChess(enemyLastPoint,enemyColor);
				}
				point = {x:x,y:y};
				enemyLastPoint = point;
				drawChess(point,enemyColor);
				drawChessFocus(point);
			}
			function judgePoint(ps,x,y){
				for(var i=0;i<ps.length;i++){
					var point = ps[i];
					if(inPoint(point,x,y)){
						return point;
					}
				}
				return null;
			}
			function inPoint(point,x,y){
				var bx = point.x-x;
				var by = point.y-y;
				return chessRadius*chessRadius-(bx*bx+by*by)>0;
			}
			// window.onbeforeunload=function(event){
			// 	return "你确定要离开本页面么";
			// }
			function getCookie(key){
				var cookieArray = document.cookie.split(";");
				for (var i=0; i<cookieArray.length; i++) {
					var proper = cookieArray[i].split("=");
					if(proper.length<2){
						continue;
					}
					if(key==proper[0]){
						return proper[1];
					}
				}
				return null;
			}
			function setCookie(name,value){
				var Days = 30;
				var exp = new Date();
				exp.setTime(exp.getTime() + Days*1000);
				// document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
				document.cookie = name+"="+escape(value)+";";
			}
			function judgeLogin(){
				var isLogin = false;
				if(getCookie("userName")){
					isLogin = true;
				}
				if(isLogin){
					$("#loginModal").modal("hide");
					drawCanvas();
				}else{
					$("#loginModal").modal("show");
				}
				return false;
			}
			function modalLogin(){
				if($("#userName").attr("vld")=="true"&&$("#userPwd").attr("vld")=="true"){
					var userName = $("#userName").val();
					var userPwd = $("#userPwd").val();
					$.ajax({
						url:"loginServer.php",
						dataType:"json",
						data:{userName:userName,userPwd:userPwd},
						type:"post",
						success:function(info){
							console.log(info);
							if(info.code==0){
								setCookie("userName",userName);
								setCookie("nickName",info.nickName);
								setCookie("userId",info.id);
								judgeLogin();
							}
						}
					});
				}
			}
			console.log(document.cookie);
			$(function(){
				judgeLogin();
				$("#loginModal").on('hidden.bs.modal',function(e){
					judgeLogin();
				});
			});
		</script>
	</head>

	<body>
		<canvas id="canvas" width="360" height="640"></canvas>
		<div class="modal fade" id="loginModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">登录</h4>
					</div>
					<div class="modal-body">
						<form class="form-horizontal">
							<div class="form-group has-feedback">
								<label for="userName" class="col-sm-3 control-label ">用户名：</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" placeholder="用户名" exp="^[a-zA-Z]{1}[a-zA-Z_0-9]{1,15}$" id="userName" vld="false" name="userName">
									<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
								</div>
								<div class="col-sm-4 tips">
									<span style="color:red;">*</span>&nbsp;用户名为数字、字母和下划线组成
								</div>
							</div>
							<div class="form-group has-feedback">
								<label for="userPwd" class="col-sm-3 control-label">密码：</label>
								<div class="col-sm-5">
									<input type="password" class="form-control" placeholder="密码" exp="^[a-zA-Z_0-9]{6,16}$" id="userPwd" vld="false" name="userPwd">
									<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
								</div>
								<div class="col-sm-4 tips">
									<span style="color:red;">*</span>&nbsp;密码长度为6~16位
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" onclick="javascript:modalLogin();">登录</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="alertModal">
			<div class="modal-dialog m-d-r">
				<div class="modal-content">
					<div class="modal-body icon-body">
						<div class="row" style="height:140px;">
							<div class="col-sm-2 icon-tip"><span class="glyphicon glyphicon-alert g-r"></span></div>
							<div class="col-sm-8 tip-text">
								表单提交出错，请联系管理员liquitar!
							</div>
						</div>
						<div class="row" style="text-align:center;">
							<button type="button" class="btn btn-warning btn-result" onclick="hideResult()">确定</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>