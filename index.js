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

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}