// Write your code in this file!
function scuberGreetingForFeet(distance) {
	
	let rtn;

	if (distance <= 400) {
		rtn = 'This one is on me!';
	} else if (distance >= 2000 && distance <= 2500){
		rtn = 'I will gladly take your thirty bucks.'
	} else if (distance > 2500) {
		rtn = 'No can do.';
	}
	return rtn;
}

function ternaryCheckCity(cityName) {
	return cityName === 'NYC' ? "Ok, sounds good." : 'No go.';
}


function switchOnCharmFromTip(tipQuality) {
	
	let comment;

	switch (tipQuality) {
		case 'generous':
			comment = "Thank you so much.";
			break;
		case 'not as generous':
			comment = "Thank you.";
			break;
		default:
			comment = "Bye.";
	}
	return comment;
}

