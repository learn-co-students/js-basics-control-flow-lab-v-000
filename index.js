// Write your code in this file!

function scuberGreetingForFeet(someNumber) {
	// 199 is going to be passed in as an argument
	// < 400 ft will return "This one is on me!"
	let greeting

	if (someNumber < 400) {
		greeting = "This one is on me!";
	} else if (someNumber > 2000 && someNumber < 2500) {
		greeting = "I will gladly take your thirty bucks.";
	} else if (someNumber > 2500) {
		greeting = "No can do.";
	}
	return greeting
}

function ternaryCheckCity(someCity) {
	
	let city

	if (someCity === 'NYC') {
		city = "Ok, sounds good.";
	} else {
		city = "No go.";
	}
	return city
}

function switchOnCharmFromTip(charmResponse) {

	let customerReply

	if (charmResponse === "generous") {
		customerReply = "Thank you so much.";
	} else if (charmResponse === "not as generous") {
		customerReply = "Thank you.";
	} else {
		customerReply = "Bye.";
	}
	return customerReply
}