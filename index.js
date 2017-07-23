$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			$("#btn_top").fadeIn();
			
		}
		else{
			$("#btn_top").fadeOut();
		}
		
	});
	$("#btn_top").click(function(){
		$("body,html,").animate({scrollTop:0},1000);
	});
	
});
