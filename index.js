// Write your code in this file!

function scuberGreetingForFeet(n) {
	let greeting;

	if (n <= 400) {
		greeting = 'This one is on me!';
	}

	if (n > 2000) {
		greeting = "I will gladly take your thirty bucks.";
	}

	if (n > 2500) {
		greeting = "No can do.";
	}

	return greeting;
}

function ternaryCheckCity(destination) {
	let greeting;

	destination	!== "NYC" ? (greeting = "No go.") : (greeting = "Ok, sounds good.")

	return greeting;
}

function switchOnCharmFromTip(tip) {
	let greeting;

	switch (tip) {
		case 'generous':
			greeting = "Thank you so much.";
			break;
		case 'not as generous':
			greeting = "Thank you."
			break;
		default:
			greeting = "Bye."
	}

	return greeting;
}