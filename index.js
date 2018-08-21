// Write your code in this file!
function scuberGreetingForFeet(someValue) {
	let greeting
	if (someValue <= 400) {
		greeting = "This one is on me!"
	} else if (someValue > 2000 && someValue < 2500) {
		greeting = "I will gladly take your thirty bucks."
	} else if (someValue > 2500) {
		greeting = "No can do."
	}

	return greeting
}

function ternaryCheckCity(someCity) {
	const answer = (someCity === "NYC") ? "Ok, sounds good." : "No go."

	return answer
}

function switchOnCharmFromTip(someTip) {
	let charm;

	switch(someTip) {
		case "generous":
			charm = "Thank you so much.";
			break;
		case "not as generous":
			charm = "Thank you." ;
			break;
		default:
			charm = "Bye."
			break;
	}

	return charm
}