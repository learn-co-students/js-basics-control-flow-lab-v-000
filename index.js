function scuberGreetingForFeet(dist) {
	if (dist <= 400) {
		return 'This one is on me!';
	} else if (dist >2500) {
		return 'No can do.';
	} else if (dist > 2000) {
		return 'I will gladly take your thirty bucks.';
	}

}

function ternaryCheckCity(city) {
	switch (city) {
		case 'NYC':
			return "Ok, sounds good.";
			break;
		default:
			return "No go.";
			break;
	}
}

function switchOnCharmFromTip(tip) {
	switch (tip) {
		case 'generous':
			return 'Thank you so much.'
			break;
		case 'not as generous':
			return 'Thank you.'
			break;
		default:
			return 'Bye.'
			break;
	}
}