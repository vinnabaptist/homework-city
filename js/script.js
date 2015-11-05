// pseudocode:
// 	Collect input (city)
// 	Set conditions
// 	If city = NYC, New York or New York City, then change background to show ny.jpg
// 	If city = San Francisco, SF or Bay Area, then change background to show sf.jpg
// 	If city = LA, LAX or Los Angeles, then change background to show la.jpg
// 	and so on...

$(document).ready(function() {
});

$('#submit-btn').click(changeCity);

function changeCity(){
	var city = $('#city-type').val();

	if (city.toLowerCase() == "nyc" || city.toLowerCase() == "new york" || city.toLowerCase() == "new york city") {
		// $('body').removeClass();
		// $('body').addClass('nyc');
		$('body').attr('class','nyc');
		event.preventDefault();
	}
	else if (city.toLowerCase()=="san francisco" || city.toLowerCase()=="sf" || city.toLowerCase()=="bay area") {
		// $('body').removeClass();
		// $('body').addClass('sf');
		$('body').attr('class','sf');
		event.preventDefault();
	}
	else if (city.toLowerCase()=="los angeles" || city.toLowerCase()=="la" || city.toLowerCase()=="lax") {
		// $('body').removeClass();
		// $('body').addClass('la');
		$('body').attr('class','la');
		event.preventDefault();
	}
	else if (city.toLowerCase()=="austin" || city.toLowerCase()=="atx") {
		// $('body').removeClass();
		// $('body').addClass('austin');
		$('body').attr('class','austin');
		event.preventDefault();
	}
	else if (city.toLowerCase()=="sydney" || city.toLowerCase()=="syd") {
		// $('body').removeClass();
		// $('body').addClass('sydney');
		$('body').attr('class','sydney');
		event.preventDefault();
	}


	// switch(city.toLowerCase()) {
	// 	case "nyc":
	// 	case "new york":
	//	case "new york city":
	// 		$('body').removeClass();
	// 		$('body').addClass('nyc');
	// 		return false;
	// 	case "sf":
	// 	case "san francisco":
	//	case "bay area":
	// 		$('body').removeClass();
	// 		$('body').addClass('sf');
	// 		return false;
	// 	case "la":
	// 	case "los angeles":
	//	case "lax":
	// 		$('body').removeClass();
	// 		$('body').addClass('la');
	// 		return false;			
	// };
	// return false;
}