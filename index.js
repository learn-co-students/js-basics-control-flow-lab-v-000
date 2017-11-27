// Write your code in this file!
// scuberGreetingForFee() solve with if...else

function scuberGreetingForFeet(distance) {
	if (distance <= 400) {
		return "This one is on me!";
	} else if (distance > 2000 && distance < 2500) {
		return "I will gladly take your thirty bucks.";
	} else {
		return  "No can do.";
	}
}

function ternaryCheckCity(city) {
	return "NYC" === city ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
	let response;
	switch (tip) {
		case 'generous':
			response = "Thank you so much.";
			break;
		case 'not as generous':
			response = "Thank you.";
			break;
		default:
			response = "Bye.";
			break;
	}
	return response;
}