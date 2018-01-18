// Write your code in this file!
function scuberGreetingForFeet(arg) {
	if (arg <= 400) {
		return "This one is on me!";
	}
	else if (arg > 2000 && arg < 2500) {
		return "I will gladly take your thirty bucks.";
	}
	else if (arg > 2500) {
		return "No can do.";
	}
}

function ternaryCheckCity(arg) {
	if (arg === 'NYC') {
		return "Ok, sounds good.";
	}
	else 
		return "No go.";
}

function switchOnCharmFromTip(arg) {
	if (arg === "generous") {
		return "Thank you so much.";
	}
	if (arg === "not as generous") {
		return "Thank you.";
	}
	else 
		return "Bye.";
}