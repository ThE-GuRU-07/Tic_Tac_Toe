var i = 0;
var btn_1 = $(".btn_1");
var btn_2 = $(".btn_2");
var btn_3 = $(".btn_3");
var btn_4 = $(".btn_4");
var btn_5 = $(".btn_5");
var btn_6 = $(".btn_6");
var btn_7 = $(".btn_7");
var btn_8 = $(".btn_8");
var btn_9 = $(".btn_9");
var score_1 = 0;
var score_2 = 0;
var time = 200;

function addAnimation1(value){
	$("#"+value).addClass("animation_1");
	new Audio("sounds/message_click_1.mp3").play();
	check_1(1 ,"blue");
		
}

function addAnimation2(value){
	$("#"+value).addClass("animation_2");
	new Audio("sounds/message_click_1.mp3").play();
	check_1(2 ,"red");
				
}

function check_1(num ,color){
	animation = "animation_"+num;
	win = color+" "+"wins";

	console.log(i)

	if(btn_1.hasClass(animation) && btn_2.hasClass(animation) && btn_3.hasClass(animation)){
		console.log(win)
		$(".ha").addClass("ha1")
		setTimeout(function(){
			$(".ha").removeClass("ha1")
		} ,time)
		soln(num ,color)
	}else if(btn_4.hasClass(animation) && btn_5.hasClass(animation) && btn_6.hasClass(animation)){
		console.log(win)
		$(".ha").addClass("ha2")
		setTimeout(function(){
			$(".ha").removeClass("ha2")
		} ,time)
		soln(num ,color)
	}else if(btn_7.hasClass(animation) && btn_8.hasClass(animation) && btn_9.hasClass(animation)){
		console.log(win)
		$(".ha").addClass("ha3")
		setTimeout(function(){
			$(".ha").removeClass("ha3")
		} ,time)
		soln(num ,color)
	}else if(btn_7.hasClass(animation) && btn_5.hasClass(animation) && btn_3.hasClass(animation)){
		console.log(win)
		$(".ha").addClass("hav2")
		setTimeout(function(){
			$(".ha").removeClass("hav2")
		} ,time)
		soln(num ,color)
	}else if(btn_1.hasClass(animation) && btn_5.hasClass(animation) && btn_9.hasClass(animation)){
		console.log(win)
		$(".ha").addClass("hav1")
		setTimeout(function(){
			$(".ha").removeClass("hav1")
		} ,time)
		soln(num ,color)
	}else if(btn_1.hasClass(animation) && btn_4.hasClass(animation) && btn_7.hasClass(animation)){
		console.log(win)
		$(".va").addClass("va1")
		setTimeout(function(){
			$(".va").removeClass("va1")
		} ,time)
		soln(num ,color)
	}else if(btn_2.hasClass(animation) && btn_5.hasClass(animation) && btn_8.hasClass(animation)){
		console.log(win)
		$(".va").addClass("va2")
		setTimeout(function(){
			$(".va").removeClass("va2")
		} ,time)
		soln(num ,color)
	}else if(btn_3.hasClass(animation) && btn_6.hasClass(animation) && btn_9.hasClass(animation)){
		console.log(win)
		$(".va").addClass("va3")
		setTimeout(function(){
			$(".va").removeClass("va3")
		} ,time)
		soln(num ,color)
	}
	
	if(i === 8){
		i = 0;
		$(".btn_").removeClass("animation_1")
		$(".btn_").removeClass("animation_2")

	}

}

function soln(num ,color){

	score = $(".p_"+num)

	switch(color){

		case "blue":
			score_1++;
			score.text(score_1);
			break;

		case "red":
			score_2++;
			score.text(score_2);
			break;
	}
	new Audio("sounds/box_box.mp3").play();
	setTimeout(function(){
		$(".btn_").removeClass("animation_1")
		$(".btn_").removeClass("animation_2")
		i = 0
	} ,200)
	

}

function effects(btn_1 ,btn_2 ,btn_3){
	btn_1.addClass("pressed")
	btn_2.addClass("pressed")
	btn_3.addClass("pressed")
	setTimeout(function(){
		btn_1.removeClass("pressed")
		btn_2.removeClass("pressed")
		btn_3.removeClass("pressed")
	} ,200)
}

function clear(){ 
	$(".btn_").removeClass("animation_1")
	$(".btn_").removeClass("animation_2")
	i = 0

}





$(".btn_").click(function(){
	
	var button = $(this).attr("id");
	if(i%2 === 0){
		addAnimation1(button);

	}else{
		addAnimation2(button);

	}
	
	i++;

})

