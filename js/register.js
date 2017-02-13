function show1(){
	var sjhm=document.getElementById("sjhm");	
	var reg=/^1\d{10}$/;
	if(!reg.test(sjhm.value)){
		document.getElementById("yz1").style.display="block";
		sjhm.focus();
		return false;
	}
	document.getElementById("yz1").style.display="none";
	return true;
}
function show2(){
		var yzm=document.getElementById("yzm");
		if(yzm.value!="7734"){
			document.getElementById("yz2").style.display="block";
		return false;
			}
			document.getElementById("yz2").style.display="none";
			return true;
		 	}
function show3(){
		var dxjym=document.getElementById("dxjym");
		var reg=/^\d{6}$/;
		if(!reg.test(dxjym.value)){
			document.getElementById("yz3").style.display="block";
		dxjym.focus();
		return false;
			 }
			 document.getElementById("yz3").style.display="none";
			 return true;
	}
function show4(){
	var mm=document.getElementById("mm");
	var cfmm=document.getElementById("cfmm");
	if(mm.value.length<=4||mm.value.length>=10){
		document.getElementById("yz4").style.display="block";
		mm.focus();
		return false;
	}
	document.getElementById("yz4").style.display="none";
	return true;
}
function show5(){
		var mm=document.getElementById("mm");
	var cfmm=document.getElementById("cfmm");
	if(mm.value!=cfmm.value){
		document.getElementById("yz5").style.display="block";
		return false;
	}
	document.getElementById("yz5").style.display="none";
	return true;
}
function show(){
	if(show1()&&show2()&&show3()&&show4()&&show5()){
		return true;
	}else{
		return false;	
	}	
}

