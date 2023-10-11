
this.onmessage = function(e) {
	startTimer(e.data[0], e.data[1]);
};

function startTimer(start_time, random){
	var countDownDate = new Date(start_time).getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for minutes and seconds
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// If the count down is over, write some text 
		if (distance < 0)
			clearInterval(x);
		else
			postMessage([prepend_zero_if_one_digit(minutes), prepend_zero_if_one_digit(seconds), random]);

	}, 1000);
}
function prepend_zero_if_one_digit(number){
	if(number.toString().length == 1)
		return "0"+number;
	return number;
}
