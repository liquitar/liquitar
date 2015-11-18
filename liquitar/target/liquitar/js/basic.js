// JavaScript Document

//enter的空格键是13;
	//空格的keyCode = 32;
	//a的keyCode = 65;
	//z的keyCode = 90;
	//F5的keyCode = 116;
		var COOKIE_KEY_CONSTANT = "userNameRegisted";
		var COOKIE_KEY_NICKNAME = "nickNameCookie";
		var boat1,boat2,boat3;
		var pagew = $("body").width();
		var cut1=0;
		var cut2=0;
		var cut3=0;
		var rightNum = 0;
		var wrongNum = 0;
		var rightRat = 0.0;
//		var source = "abcdefghijklmnopqrstuvwxy";
		var source;
		var time = 600;
		var totalNum = 0;
		var cookie = document.cookie;
		var allowSubmit = true;
		var allowLogin = true;
		var cookieArray = cookie.split(";");
		var checkOver ;
		var now = "moving";
		var moving ;
		var hasLogin = false;
    	$(function(){
			$(window).resize(function(){
				pagew = $("body").width();
			});
			$(window).unload( function () { alert("Bye now!"); } );
			var cookie_login = getCookie(COOKIE_KEY_CONSTANT);
			if(cookie_login != null){
				//用户以经登录
				var nickName = getCookie(COOKIE_KEY_NICKNAME);
				$("#login_nickName").html(nickName);
				hasLogin = true;
				loginSuccessful();
				$(".login-info").show();
				$(".log-canvas").hide();
			}else{
				//用户未登录，请用户登录
				$(".log-canvas").show();
			}
			/*$(".login_exit").click(function(){
				cancel();
			});*/
			$(".login_ok > label > span").click(function(){
				$(".log-canvas").hide();
				$(".canvas").css("display","block");
			});
			$(".ipt").blur(function(e) {
				var $input = $(this);
				var val = $input.val();
				var regs = $input.attr("reg");
				var pat = new RegExp(regs);
				var ret = pat.test(val);
				var i_name = $input.attr("name");
				
				if(!ret){
					$input.css("border","#f00 solid 1px");
					if(i_name=="userName"){
						$input.siblings(".tips").html("数字字母下划线，长度为8-16");
					}
					$input.siblings(".tips").show();
					$input.siblings(".pic_tip").hide();
					
					//shotRed(this,2);
				}else{
					$input.css("border","#aaa solid 1px");
					$input.siblings(".pic_tip").show();
					$input.siblings(".tips").hide();
					
				}
				if(i_name=="pwd_t"){
					var pwd = $("input[name='pwd']").val();
					if(val!=pwd){
						$input.css("border","#f00 solid 1px");
						$input.siblings(".tips").show();
						$input.siblings(".pic_tip").hide();
					}else{
						$input.css("border","#aaa solid 1px");
						$input.siblings(".pic_tip").show();
						$input.siblings(".tips").hide();
					}
				}
			});
			$(".ipt-login").blur(function(e) {
				var $input = $(this);
				var val = $input.val();
				var regs = $input.attr("reg");
				var pat = new RegExp(regs);
				var ret = pat.test(val);
				if(!ret){
					$input.css("border","#f00 solid 1px");
				}else{
					$input.css("border","#aaa solid 1px");
				}
			});
		});
		function loginSuccessful(){
			$.ajax({
				url:"/php/basic.php",
				dataType:"json",
				type:"post",
				async:false,
				success:function(data){
					source = data;
				}
			});
			init();
			hasLogin = true;
			boat1Change();
			boat2Change();
			boat3Change();
			checkOver = setInterval(checkTime,1000);
			moving = setInterval(divMove,100);
		}
		function boat1Change(){
			totalNum++;
			fullFillResult();
			var imgName = getBoat();
//			boat1 = getBoat();
			boat1 = imgName.substr(0,1);
			$(".boat1 > img").attr("src","php/basic/"+imgName);	
			cut1 = 0;
			$(".boat1").css("left",0);
		}
		function boat2Change(){
			fullFillResult();
			totalNum++;
			var imgName = getBoat();
			boat2 = imgName.substr(0,1);
			$(".boat2 > img").attr("src","php/basic/"+imgName);	
			cut2 = 0;
			if(rightNum>0){
				play();
			}
			$(".boat2").css("left",0);
		}
		function boat3Change(){
			totalNum++;
			fullFillResult();
			var imgName = getBoat();
			boat3 = imgName.substr(0,1);
			$(".boat3 > img").attr("src","php/basic/"+imgName);	
			cut3 = 0;
			if(rightNum>0){
				play();
			}
			$(".boat3").css("left",0);
		}
		function fullFillResult(){
			$("#right_num").html(rightNum+"个");
			$("#wrong_num").html(wrongNum+"个");
			getRate();
			if(rightNum>0){
				play();
			}
			$("#right_rat").html(rightRat+"%");
		}
		function getBoat(){
			var index = Math.floor(Math.random()*source.length);
	//		return source.charAt(index);
			return source[index];
		}
		$(document).keyup(function(e) {
			if(!hasLogin){
				return ;
			}
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
		function getRate(){
			if(rightNum==0&&wrongNum==0){
				rightRat = 0.0;
			}else{
				rightRat = rightNum*100/(rightNum+wrongNum);
				rightRat = rightRat.toFixed(2);
			}
		}
		function checkTime(){
			if(time<=1){
				clearInterval(moving);	
				clearInterval(checkOver);
				//时间结束，显示用户的练习结果
				$(".result").show();
				$("#t_n").html(totalNum+"个");
				$("#t_r").html($("#right_num").html());
				$("input[name='rightNum']").val($("#right_num").html());
				$("#t_w").html($("#wrong_num").html());
				$("input[name='wrongNum']").val($("#wrong_num").html());
				$("#t_a").html($("#right_rat").html());
				$("#t_s").html(getSpeed());
				
				//正常结束
				$.ajax({
					url:'/php/gamerecord.php',
					type:'post',
					dataType:'json',
					async:false,
					data:$("#resultForm").serialize(),
					success:function(data){
						if(data.info==1){
							alert("练习结果以经记录");
						}
					},
					error:function(data){
						alert("数据保存失败");
					}
				});
			}else{
				time--;
				var m = parseInt(time/60);
				m = getTwo(m);
				var sec = time%60;
				sec = getTwo(sec);
				$(".tc").html(m+":"+sec);
			}
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
		function getCookie(name){
			if(!cookieArray){
				cookie = document.cookie;
				cookieArray = cookie.split(";");
			}
			for(var i=0;i<cookieArray.length;i++){
				var car = $.trim(cookieArray[i]);
				var keyValue = car.split("=");
				var cookieKey = keyValue[0];
				if(cookieKey == name){
					return keyValue[1];
				}
			}
			return null;
		}
		function jsvalid(o){
		$(o).attr("disabled","disabled");
		var isPass = true;
		$("#rip").val($("#keleyivisitorip").html());
		$(".ipt").each(function(index, element) {
            var $input = $(this);
			var val = $input.val();
			var regs = $input.attr("reg");
			var pat = new RegExp(regs);
			var ret = pat.test(val);
			var i_name = $input.attr("name");
			if(!ret){
				$input.css("border","#f00 solid 1px");
				if(i_name=="userName"){
					$input.siblings(".tips").html("数字字母下划线，长度为8-16");
				}
				$input.siblings(".tips").show();
				$input.siblings(".pic_tip").hide();
				isPass = false;
			}else{
				$input.css("border","#aaa solid 1px");
				$input.siblings(".pic_tip").show();
				$input.siblings(".tips").hide();
			}
        });
		//验证两次输入的密码是否一至
		var $input = $("input[name='pwd_t']");
		var val = $input.val();
		var pwd = $("input[name='pwd']").val();
		if(val!=pwd){
			$input.css("border","#f00 solid 1px");
			$input.siblings(".tips").show();
			$input.siblings(".pic_tip").hide();
			isPass = false;
		}else{
			$input.css("border","#aaa solid 1px");
			$input.siblings(".pic_tip").show();
			$input.siblings(".tips").hide();
		}
		if(isPass==false){
			return false;
		}
		$.ajax({
			url:'php/regist.php',
			
			type:'post',
			data:$("#registForm").serialize(),
			dataType:"json",
			success: function(data){
				if(data.info==1){
					//注册成功，跳转到登录
					/*
					$(".ok_info").html("注册成功，请登录后练习五笔字根!");
					$(".ok_info").show();
					*/
					$(".canvas").css("display","none");
					$(".log-canvas").show();
					$(".ok_info").html("注册成功，请登录后练习五笔字根!");
					$(".ok_info").show();
					$(".login_ok").show();
					$(".login_ok > label").hide();
				}else if(data.info==2){
					//注册失败，用户名重复，请重新填写
					$(o).attr("disabled",false);
					$("input[name='userName']").siblings(".tips").html("用户名被占用");
					$("input[name='userName']").siblings(".tips").show();
					$("input[name='userName']").siblings(".pic_tip").hide();
					
				}else{
					//注册失败，请重新注册，或至首页留言
					alert("注册失败，请重新注册，或至首页留言");
				}
			},
			error:function(data){
				console.log("register falied");
			}
		});
	}
	function cancel(){
		location.href="http://www.liquitar.com";
	}
	function userLogin(){
		$("#lip").val($("#keleyivisitorip").html());
		if(allowLogin==false){
			return ;
		}else{
			allowLogin == false;
		}
		var input_ok = true;
		$(".ipt-login").each(function(index, element) {
			var $input = $(this);
			var val = $input.val();
			var regs = $input.attr("reg");
			var pat = new RegExp(regs);
			var ret = pat.test(val);
			if(!ret){
				$input.css("border","#f00 solid 1px");
				input_ok = false;
			}else{
				$input.css("border","#aaa solid 1px");
				input_ok = true;
			}
		});
		if(!input_ok){
			return false;
		}
		$.ajax({
			url:'/php/login.php',
			async:false,
			dataType:"json",
			type:'post',
			data:$("#LoginForm").serialize(),
			success: function(data){
				if(data.info==1){
					//登录成功，可以开始玩游戏了,设置cookie
					var nickNames = data.nickName;
					$("#login_nickName").html(nickNames);
					$(".login-info").show();
					$(".log-canvas").hide();
					document.cookie = COOKIE_KEY_CONSTANT + "=" + data.recordId;
					document.cookie = COOKIE_KEY_NICKNAME + "=" + nickNames;
					var recordId = data.recordId;
					$("input[name='recordId']").val(recordId);
					loginSuccessful();
				}else{
					//登录失败，请重新登录
					$(".ipt-login").each(function(index, element) {
                        $(this).val("");
                    });
					allowLogin = true;
				}
			}
		});
	}
	
	function clearLogin(){
		document.cookie = COOKIE_KEY_CONSTANT + "=''";
		document.cookie = COOKIE_KEY_NICKNAME + "=''";
		$(".log-canvas").show();
	}