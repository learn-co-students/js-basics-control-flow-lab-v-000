function scuberGreetingForFeet(length_in_feet) {

	let result
	if (length_in_feet <= 400) {
		result = 'This one is on me!'
	} else if (length_in_feet > 2500) {
		result = 'No can do.'
	} else if (length_in_feet > 2000) {
		result = 'I will gladly take your thirty bucks.'
	}

	return result

}

function ternaryCheckCity(city) {

	let result
	if (city === 'NYC') {
		result = 'Ok, sounds good.'
	} else {
		result = 'No go.'
	}

	return result

}

function switchOnCharmFromTip(tip) {

	let result
	if (tip === 'generous') {
		result = 'Thank you so much.'
	} else if (tip === 'not as generous') {
		result = 'Thank you.'
	} else {
		result = 'Bye.'
	}

	return result

}