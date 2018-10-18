// Write your code in this file!

function scuberGreetingForFeet(feet) {

  let message
    if (feet <= 400){
      message = "This one is on me!"
    } else if (1999 < feet && feet < 2500){
      message = "I will gladly take your thirty bucks."
    } else {
      message = "No can do."
    }

  return message
};

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
};


function switchOnCharmFromTip(tip) {

  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
        return "Bye."

  }
};
