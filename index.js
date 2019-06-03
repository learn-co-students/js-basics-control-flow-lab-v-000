function scuberGreetingForFeet(d) {
	let answer;
	if (d <= 400) {
		answer = "This one is on me!";
	} else if ((d > 400) && (d <= 2500)) {
		answer = "I will gladly take your thirty bucks.";
	} else if (d > 2500) {
		answer = "No can do.";
	}
	return answer;
}

function ternaryCheckCity(city) {
	const greeting = city === "NYC"? "Ok, sounds good." : "No go.";
	return greeting;
}

function switchOnCharmFromTip(tip) {
	let message;
	switch (tip) {
    case "generous":
        message = 'Thank you so much.';
        break;
    case "not as generous":
        message = "Thank you.";
        break;
    default:
        message = "Bye."
        break;
	}
	return message;
}
