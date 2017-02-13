//男女商品切换内容
function showcontent(n){
		var girl=document.getElementById("content_girl");
		var boy=document.getElementById("content_boy");
		if(n==1){
			boy.style.display="none";
			girl.style.display="block";
		}
		else if(n==2){
			girl.style.display="none";
			boy.style.display="block";
		}
}

	//动画效果		
$(
	function Q3(){
		$("#Q3").fadeTo(2000,0.3);
		$("#Q3").fadeTo(2000,1);
	}
	)

	