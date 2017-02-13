//计时器函数		
var second=93600;
function start(){
		var day=parseInt(second/86400);
		var hourLeft=second%86400;
		var hour=parseInt(hourLeft/3600);
		var minuteLeft=hourLeft%3600;
		var minute=parseInt(minuteLeft/60);
		var s=minuteLeft%60;
		second--;
		var timestr=day+"天"+hour+"小时"+minute+"分钟"+s+"秒";
		document.all.timmer.innerHTML=timestr;
		document.all.timmer1.innerHTML=timestr;
		document.all.timmer2.innerHTML=timestr;
		document.all.timmer3.innerHTML=timestr;
		document.all.timmer4.innerHTML=timestr;
		document.all.timmer5.innerHTML=timestr;
		if(second>0){
			var timer=setTimeout("start()",1000);
		}}
	//窗口加载
function init(){
	start();
}
window.onload = init;
/*品牌团动画效果*/
$(function(){
$("#f11").hover(
function(){
	$("#f11").animate({right:"+=265px"},500);
	$("#f11").fadeTo(500,0.8);
	},
	function(){
	$("#f11").animate({right:"-=265px"},500);
	$("#f11").fadeTo(500,1);
	})});

$(function(){
$("#f22").hover(
function(){
	$("#f22").animate({right:"+=265px"},500);
	$("#f22").fadeTo(500,0.8);
	},
	function(){
	$("#f22").animate({right:"-=265px"},500);
	$("#f22").fadeTo(500,1);
	})});

$(function(){
$("#f33").hover(
function(){
	$("#f33").animate({right:"+=265px"},500);
	$("#f33").fadeTo(500,0.8);
	},
	function(){
	$("#f33").animate({right:"-=265px"},500);
	$("#f33").fadeTo(500,1);
	})});

$(function(){
$("#f44").hover(
function(){
	$("#f44").animate({right:"+=265px"},500);
	$("#f44").fadeTo(500,0.8);
	},
	function(){
	$("#f44").animate({right:"-=265px"},500);
	$("#f44").fadeTo(500,1);
	})});

$(function(){
$("#f55").hover(
function(){
	$("#f55").animate({right:"+=265px"},500);
	$("#f55").fadeTo(500,0.8);
	},
	function(){
	$("#f55").animate({right:"-=265px"},500);
	$("#f55").fadeTo(500,1);
	})});

$(function(){
$("#f66").hover(
function(){
	$("#f66").animate({right:"+=265px"},500);
	$("#f66").fadeTo(500,0.8);
	},
	function(){
	$("#f66").animate({right:"-=265px"},500);
	$("#f66").fadeTo(500,1);
	})});
