let someValue;

function scuberGreetingForFeet(someValue) {

if (someValue <= 400) {
	 return "This one is on me!";
} else if (someValue > 2000 && someValue < 2499) {
	 return "I will gladly take your thirty bucks.";
} else if (someValue > 2500)
	 return "No can do.";
}






function ternaryCheckCity(city) {
let message
city == "NYC" ? message =  "Ok, sounds good." : message = "No go.";
return message 
}


function switchOnCharmFromTip (tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}