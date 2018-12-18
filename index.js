// Write your code in this file!
function scuberGreetingForFeet(num) {
  let greeting = '';
  
  if (num <= 400) {
    greeting = "This one is on me!";
  }
  else if (num > 2500) {
    greeting = "No can do.";
  }
  else  {
    greeting = "I will gladly take your thirty bucks.";
  }
  return greeting;
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  } 
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much.";
  }
  else if (tip === "not as generous") {
    return "Thank you.";
  }
  else {
    return "Bye.";
  }
}



