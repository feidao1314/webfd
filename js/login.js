
function change(n){
	var right2 = document.getElementById("right2");
	var right3 = document.getElementById("right3");
	var form=document.getElementById("form");
	
	var yyzsj=document.getElementById("yyzsj");
	var mm=document.getElementById("mm");
	
	var yzcdsjhm=document.getElementById("yzcdsjhm");
	var yzm=document.getElementById("yzm");
	var dxjym=document.getElementById("dxjym");
	
	if(n==1){
		form.style.height="193px";
		right2.style.display= "block";
		right3.style.display= "none";
		yyzsj.value="";
		yzm.value="";
		}
	if(n==2){
		form.style.height="240px";
		right2.style.display= "none";
		right3.style.display= "block";
		yzcdsjhm.value="";
		mm.value="";
		dxjym.value="";
		}
	}
	
function show5(){
	var yyzsj=document.getElementById("yyzsj");	
	var reg=/^1\d{10}$/;
	if(!reg.test(yyzsj.value)){
		document.getElementById("yz1").style.display="block";
		yyzsj.focus();
		return false;
	}
	document.getElementById("yz1").style.display="none";
	return true;
}
function show6(){
	var mm=document.getElementById("mm");
	if(mm.value.length<6||mm.value.length>14){
		document.getElementById("yz2").style.display="block";
		mm.focus();
		return false;
	}
	document.getElementById("yz2").style.display="none";
	return true;
}
function show11(){
	if(show5()&&show6() ){
		return true;
	}else{
		return false;	
	}	
}
function show7(){
	var yzcdsjhm=document.getElementById("yzcdsjhm");	
	var reg=/^1\d{10}$/;
	if(!reg.test(yzcdsjhm.value)){
		document.getElementById("yz3").style.display="block";
		yzcdsjhm.focus();
		return false;
	}
	document.getElementById("yz3").style.display="none";
	return true;
}
function show8(){
		var yzm=document.getElementById("yzm");	 
		if(yzm.value!="KNBD"){
			document.getElementById("yz4").style.display="block";
		return false;
			}
			document.getElementById("yz4").style.display="none";
			return true;
		 	}
function show9(){
		var dxjym=document.getElementById("dxjym");
		var reg=/^\d{6}$/;
		if(!reg.test(dxjym.value)){
			document.getElementById("yz5").style.display="block";
			dxjym.focus();
		return false;
			 }
			 document.getElementById("yz5").style.display="none";
			 return true;
	}
function show12(){
	if(show7()&&show8()&&show9()){
		return true;
	}else{
		return false;	
	}	
}