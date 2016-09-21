$(function(){
	var current_li;
	
	$("#search").keypress(function(){
		var current_query=$("#search").val();
		$("#portfolio li").hide();
		 $("#portfolio li").each(function(){
			var current_keyword=$(this).attr("data-keywords");
			if (current_keyword.indexOf(current_query) >=0){
				$(this).show();
			}
		 });
	});
	
	function SetImg(src, id){
	 $("#main").attr("src",src);
     var path="text/"+id+".txt";
     $.get(path,function(data){
		$("#description p").html(data); 
	 });	 
	}
	
	$("#portfolio img").click(function(){
		var src=$(this).attr("src");
		var id=$(this).attr("id");
		current_li=$(this).parent();
		SetImg(src, id);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});
	
	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();
	});
	
	$("#right").click(function(){
		if(current_li.is(":last-child")){
			var next_li=$("#portfolio li").first();
		}else{
			var next_li=current_li.next();
		}
		var next_src=next_li.children("img").attr("src");
		var id=next_li.children("img").attr("id");
		$("#main").attr("src" , next_src);
		SetImg(next_src,id);
		current_li=next_li;
	});
	
	$("#left").click(function(){
		if(current_li.is(":first-child")){
			var prev_li=$("#portfolio li").last();
		}else{
			var prev_li=current_li.prev();
		}
		var prev_src=prev_li.children("img").attr("src");
		var id=prev_li.children("img").attr("id");
		SetImg(prev_src , id);
		current_li=prev_li;
	});
	
	$("#right , #left").mouseover(function(){
		$(this).css("opacity" , "0.60");
	});
	
	$("#right , #left").mouseout(function(){
		$(this).css("opacity" , "0.25");
	});
	
});