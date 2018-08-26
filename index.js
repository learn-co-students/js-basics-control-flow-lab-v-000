// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  }
};

function ternaryCheckCity(destinationCity){
    let response

    destinationCity === "NYC" ? response = "Ok, sounds good." : response = "No go.";

    return response;
};

function switchOnCharmFromTip(tipEvaluation){
  if (tipEvaluation === "generous") {
    return "Thank you so much.";
  } else if (tipEvaluation === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
};
