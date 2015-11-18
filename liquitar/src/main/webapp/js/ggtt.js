// JavaScript Document

//enter的空格键是13;
	//空格的keyCode = 32;
	//a的keyCode = 65;
	//z的keyCode = 90;
	//F5的keyCode = 116;
		var boat1,boat2,boat3;
		var pagew = $("body").width();
		var cut1=0;
		var cut2=0;
		var cut3=0;
		var rightNum = 0;
		var wrongNum = 0;
		var rightRat = 0.0;
		var source = "abcdefghijklmnopqrstuvwxy";
		var time = 600;
		var totalNum = 0;
    	$(function(){
			$(window).resize(function(){
				pagew = $("body").width();
			});
			boat1Change();
			boat2Change();
			boat3Change();
		});
		function boat1Change(){
			totalNum++;
			fullFillResult();
			boat1 = getBoat();
			$(".boat1 > img").attr("src","image/wubi/"+boat1+"_b.png");	
			cut1 = 0;
			$(".boat1").css("left",0);
		}
		function boat2Change(){
			fullFillResult();
			totalNum++;
			boat2 = getBoat();
			$(".boat2 > img").attr("src","image/wubi/"+boat2+"_b.png");	
			cut2 = 0;
			$(".boat2").css("left",0);
		}
		function boat3Change(){
			totalNum++;
			fullFillResult();
			boat3 = getBoat();
			$(".boat3 > img").attr("src","image/wubi/"+boat3+"_b.png");	
			cut3 = 0;
			$(".boat3").css("left",0);
		}
		function fullFillResult(){
			$("#right_num").html(rightNum+"个");
			$("#wrong_num").html(wrongNum+"个");
			getRate();
			$("#right_rat").html(rightRat+"%");
		}
		function getBoat(){
			var index = Math.floor(Math.random()*source.length);
			return source.charAt(index);
		}
		$(document).keyup(function(e) {
            if(!e){
				e = window.event;
			}
			var keyCode = e.keyCode;
			if(keyCode==116){
				return;	
			}
			if(keyCode==32){
				//用户按下了空格键，表示用户完成输入
				var uinput = $(".fti").html();
	//			debugger;
				if(uinput==boat1){
					rightNum++;
					boat1Change();
					$(".fti").html("");
					return ;
				}
				if(uinput==boat2){
					rightNum++;
					boat2Change();
					$(".fti").html("");
					return ;
				}
				if(uinput==boat3){
					rightNum++;
					boat3Change();
					$(".fti").html("");
					return ;
				}
				wrongNum++;
				fullFillResult();
				$(".fti").html("");
				return ;
			}
			var it = String.fromCharCode(keyCode).toLowerCase();
			if(keyCode>=65&&keyCode<90){
				$(".fti").html($(".fti").html()+it);
				return ;
			}
			$(".fti").html($(".fti").html()+"_");
        });
		function divMove(){
			if(cut1*15>pagew){
				cut1 = 0;
			}
			if(cut2*10>pagew){
				cut2 = 0;
			}
			if(cut3*5>pagew){
				cut3 = 0;
			}
			$(".boat1").css("left",cut1*15);
			$(".boat2").css("left",cut2*10);
			$(".boat3").css("left",cut3*5);
			cut1++;
			cut2++;
			cut3++;
		}
		var now = "moving";
		var moving = setInterval(divMove,100);
		function getRate(){
			if(rightNum==0&&wrongNum==0){
				rightRat = 0.0;
			}else{
				rightRat = rightNum*100/(rightNum+wrongNum);
				rightRat = rightRat.toFixed(2);
			}
		}
		var checkOver = setInterval(checkTime,1000);
		function checkTime(){
			if(time<=0){
				clearInterval(moving);	
				clearInterval(checkOver);
				//时间结束，显示用户的练习结果
				$(".result").show();
				$("#t_n").html(totalNum+"个");
				$("#t_r").html($("#right_num").html());
				$("#t_w").html($("#wrong_num").html());
				$("#t_a").html($("#right_rat").html());
				$("#t_s").html(getSpeed());
			}
			time--;
			var m = parseInt(time/60);
			m = getTwo(m);
			var sec = time%60;
			sec = getTwo(sec);
			$(".tc").html(m+":"+sec);
		}
		function getSpeed(){
			var speed = (rightNum+wrongNum)/10;
			return speed.toFixed(2)+"个/分";
		}
		function getTwo(sec){
			if(sec<10){
				return "0"+sec;
			}else{
				return sec;
			}
		}
		function reStart(){
			cut1=0;
			cut2=0;
			cut3=0;
			rightNum = 0;
			wrongNum = 0;
			rightRat = 0.0;
			time = 600;
			totalNum = 0;
			boat1Change();
			boat2Change();
			boat3Change();
			moving = setInterval(divMove,100);
			checkOver = setInterval(checkTime,1000);
			$(".result").hide();
		}
		function toIndex(){
			location.href="http://www.liquitar.com";
		}