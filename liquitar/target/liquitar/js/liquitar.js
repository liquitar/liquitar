var allowAdvice = {"userName":false,"phone":false,"qq":false,"advice":false};
function interval(){
	location.reload();
}
// setInterval("interval()",3000);
function showModal(){
	$("#contractMe").modal();
	// allowAdvice = true;
}
$(function(){
	$(".form-control").blur(function(){
		var $ipt = $(this);
		var value = $ipt.val();
		var reg = $ipt.attr("exp");
		var success=false;
		var $div = $ipt.parent().parent();
		var $span = $ipt.siblings("span");
		if(reg){
			var exp = new RegExp(reg,"g");
			success = exp.test(value);
		}else{
			if(value.length>0&&value.length<200){
				success = true;
			}
		}
		var result = true;
		if(success){
			$div.removeClass("has-error");
			$div.addClass("has-success");
			$span.removeClass("glyphicon-remove");
			$span.addClass("glyphicon-ok");
			$ipt.attr("vld","true");
		}else{
			result = false;
			$div.removeClass("has-success");
			$div.addClass("has-error");
			$span.removeClass("glyphicon-ok");
			$span.addClass("glyphicon-remove");
			$ipt.attr("vld","false");
		}
		var inputName = $ipt.attr("name");
		switch(inputName){
			case "userName":
				allowAdvice.userName = result;
				break;
			case "cellPhone":
				allowAdvice.phone = result;
				break;
			case "qqNo":
				allowAdvice.qq = result;
				break;
			default:
				allowAdvice.advice = result;
		}
	});

});
function submitAdvice(){
	if(allowAdvice.userName&&allowAdvice.phone&&allowAdvice.qq&&allowAdvice.advice){
		console.log($("form").serialize());
		$.ajax({
			url:"http://www.liquitar.com/php/receiveAdvice.php",
			type:"post",
			dataType:"json",
			data:$("form").serialize(),
			success:function(info){
				if(info.code==0){
					$("#contractMe").modal("hide");
					showResult(0,"建议/意见提交成功，谢谢支持！");
				}else{
					showResult(1,"建议/意见提交失败，请检查后重新提交！");
				}
			}
		});
		return;
	}
	if(!allowAdvice.userName){
		$("input[name='userName']").trigger("blur");
	}
	if(!allowAdvice.phone){
		$("input[name=phone]").trigger("blur");
	}
	if(!allowAdvice.qq){
		$("input[name=qq]").trigger("blur");
	}
	if(!allowAdvice.advice){
		$("textarea[name=advice]").trigger("blur");
	}
}
function showResult(){
	$("#responseResult").modal();
}
$(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
function showResult(resultCode,resultTip){
	if(resultCode==0){
		$(".icon-body").removeClass("modal-body-warn");
		$(".icon-body").addClass("modal-body-success");
		$(".tip-text").removeClass("tip-text-warn");
		$(".tip-text").addClass("tip-text-success");
		$(".tip-text").html(resultTip);
		$(".btn-result").removeClass("btn-warning");
		$(".btn-result").addClass("btn-success");
		$(".g-r").removeClass("glyphicon-result-warn");
		$(".g-r").removeClass("glyphicon-alert");
		$(".g-r").addClass("glyphicon-result-success");
		$(".g-r").addClass("glyphicon-ok-sign");
	}else{
		$(".icon-body").removeClass("modal-body-success");
		$(".icon-body").addClass("modal-body-warn");
		$(".tip-text").removeClass("tip-text-success");
		$(".tip-text").addClass("tip-text-warn");
		$(".tip-text").html(resultTip);
		$(".btn-result").removeClass("btn-success");
		$(".btn-result").addClass("btn-warning");
		$(".g-r").removeClass("glyphicon-result-success");
		$(".g-r").removeClass("glyphicon-ok-sign");
		$(".g-r").addClass("glyphicon-result-warn");
		$(".g-r").addClass("glyphicon-alert");
	}
	$("#alertModal").modal();
}
function hideResult(){
	$("#alertModal").modal('hide');
}