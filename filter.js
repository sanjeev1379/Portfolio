$(function(){
	$("#filter li").click(function(){
		var category=$(this).html();
		$("#filter li").removeClass("active");
		$(this).addClass("active");
		$("#portfolio li").fadeOut();
		$("#portfolio li").each(function(){
			if($(this).hasClass(category)){
				$(this).fadeIn();
			}
		});
	});
});