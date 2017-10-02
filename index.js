// Write your code in this file!
let distance;
let destination;
let tip;
let reply;

function scuberGreetingForFeet(distance) {
	if (distance <= 2000) {
		return 'This one is on me!';
	}
	else if (distance > 2000 && distance <= 2500) {
		return 'I will gladly take your thirty bucks.'
	}
	else {
		return 'No can do.'
	}
}

function ternaryCheckCity(destination) {
	reply = (destination === "NYC") ?  "Ok, sounds good." : "No go.";
	return reply;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
  	case 'generous':
  		return 'Thank you so much.'
  	case 'not as generous':
  		return 'Thank you.'
  	default:
  		return 'Bye.'
  }
}