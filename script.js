        
        $(document).ready(function(){
	$("#currentDay").moment().format("MMMM Do YYYY, h:mm:ss a"); 
	
        $("#saveBtn").on("click", function(){
	var plannerText = (this).siblings(".description").val();
	var time = (this).parent().attr("id");
	localStorage.setItem(time, plannerText);
	
	}); 
	
	val(localStorage.getItem("6"));
	val(localStorage.getItem("7"));
	val(localStorage.getItem("8"));
        val(localStorage.getItem("9"));
	val(localStorage.getItem("10"));
	val(localStorage.getItem("11"));
	val(localStorage.getItem("12"));
	val(localStorage.getItem("13"));
	val(localStorage.getItem("14"));
	val(localStorage.getItem("15"));
	val(localStorage.getItem("16"));
	val(localStorage.getItem("17"));
	val(localStorage.getItem("18"));
	
	function timeChange(){
	var currentHour = moment().hour();
	
	$('time-block').each(function(){
	var idTime = parseInt((this).attr("id"));
	if (idTime < currentHour){
	(this).addClass("past");
	} else if (idTime === currentHour){
	(this).addClass("present");
	(this).removeClass("past");
	} else {$(this).addClass("future");
	(this).removeClass("past");
	(this).removeClass("present");
	}
	})
	}
	timeChange();
	var timeInterval = setInterval(timeChange, 1000);
	
	
	});
