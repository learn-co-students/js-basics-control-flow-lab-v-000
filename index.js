// Write your code in this file!
function scuberGreetingForFeet(dist) {
	let statement;
	if (dist <= 400) {
		statement = "This one is on me!";
	} else if(dist > 2000 && dist < 2500) {
		statement = "I will gladly take your thirty bucks.";
	} else if(dist > 2500) {
		statement = "No can do."
	}
	return statement;
}

function ternaryCheckCity(dest) {
	let response;
	dest === "NYC" ? response = "Ok, sounds good." : response = "No go.";
	return response;
}

function switchOnCharmFromTip(tip) {
	let response;
	switch (tip) {
		case "generous":
			response = "Thank you so much.";
			break;
		case "not as generous":
			response = "Thank you.";
			break;
		default:
			response = "Bye.";
			break;
	}
	return response;
}