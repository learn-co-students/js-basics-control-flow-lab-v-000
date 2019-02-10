// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let message = "No can do.";

  if (feet <= 400) {
      message = "This one is on me!";
  } else if (feet > 2000 && feet < 2501) {
      message = 'I will gladly take your thirty bucks.';
  }
  return message
}


function ternaryCheckCity(city) {
let m =  (city === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  message = "Bye."

    switch (tip) {
      case "generous":
        message = "Thank you so much."
        break;
      case "not as generous":
        message = "Thank you."
        break;
    }
  return message
}
