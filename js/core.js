/* Countdown Widget Start */

$(function() {
	launchTime = new Date(); // Set launch: [year], [month], [day], [hour]...
		launchTime.setDate(launchTime.getDate() + 13); // Add 13 days
	$("#countdown").countdown({until: launchTime, format: "odHMS"});
});
/* Countdown Widget Finish */


/* Subscribe Widget Start */

$("#subscribe button").click(function() {

	var email	= $("#email").val();
	var emailReg = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,3})?(\.[a-zA-Z]{2,3})?$/;
	
	// client-side validation
	 if(emailReg.test(email) == false ){
		emailError = "Sorry, email appears to be invalid";
		return false;
	}

	$.ajax({
		type: "post",
		dataType: "json",
		url: "php/save-email.php",
		data: $("form#subscribe").serialize(),
		success: function(data) {
			
			$('#subscribe').html('We will notify you upon release. Thank you.');

		}
	});
	return false;
});
/* Subscribe Widget Finish */