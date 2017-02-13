function QQ(){
		$("#Q2").toggle(3000);
		$("#Q2").toggle(500);
}
//窗口加载
function init(){
	QQ();
}
window.onload = init;

//男女商品切换内容
function showcontent(n){
		var girl1=document.getElementById("content_girl1");
		var boy1=document.getElementById("content_boy1");
		var girl2=document.getElementById("content_girl2");
		var boy2=document.getElementById("content_boy2");
		var girl3=document.getElementById("content_girl3");
		var boy3=document.getElementById("content_boy3");
		if(n==1){
			boy1.style.display="none";
			girl1.style.display="block";
			boy2.style.display="none";
			girl2.style.display="block";
			boy3.style.display="none";
			girl3.style.display="block";
		}
		else if(n==2){
			girl1.style.display="none";
			boy1.style.display="block";
			girl2.style.display="none";
			boy2.style.display="block";
			girl3.style.display="none";
			boy3.style.display="block";	
		}
}
//9块9包邮的切换内容
function show1(n){
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");
	var d3 = document.getElementById("d3");
	var s4 = document.getElementById("s4");
	var s5= document.getElementById("s5");
	var s6 = document.getElementById("s6");
	if(n==1){
		d1.style.display="block";
		d2.style.display="none";
		d3.style.display="none";
		s4.style.display="block";
		s5.style.display="none";
		s6.style.display="none";
		}
	if(n==2){
		d1.style.display="none";
		d2.style.display="block";
		d3.style.display="none";
		s4.style.display="none";
		s5.style.display="block";
		s6.style.display="none";
		}
	if(n==3){
		d1.style.display="none";
		d2.style.display="none";
		d3.style.display="block";
		s4.style.display="none";
		s5.style.display="none";
		s6.style.display="block";
		}
	}
//首页送货地址的切换
$(
    function(){
		$("#u1_1 a").on("click",function(){
			$("#add").html("送至"+""+$(this).html());
			});});