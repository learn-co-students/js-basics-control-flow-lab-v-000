// Write your code in this file!
function scuberGreetingForFeet(rideDistance) {
  let result;

  if (rideDistance <= 400) {
  result = 'This one is on me!';
  } else if (rideDistance > 2000 && rideDistance < 2500) {
  result = 'I will gladly take your thirty bucks.';
  } else {
  result = 'No can do.';
  }

  return result;
}

function ternaryCheckCity(location) {
	let result;

	if (location === 'NYC') {
		result = 'Ok, sounds good.';
	} else {
		result = 'No go.';
	}

	return result;
}

function switchOnCharmFromTip(tip) {
	let result;

	if (tip === 'generous') {
		result = 'Thank you so much.';
	} else if (tip === 'not as generous'){
		result = 'Thank you.';
	} else {
		result = 'Bye.'
	}

	return result;
}