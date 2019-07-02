// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result;
  if (distance < 400) {
    result = "This one is on me!";
  } else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    result = "No can do."
  }
  return result;
}

function ternaryCheckCity(someValue) {
  let result;
  someValue === "NYC" ? result = "Ok, sounds good." : result = "No go.";
  return result;
}

function switchOnCharmFromTip(someValue) {
  const tip = someValue;
  let result;

  switch (tip) {
    case "generous":
      result = "Thank you so much."
      return result
      break;
    case "not as generous":
      result = "Thank you."
      return result
      break;
    default:
      result = "Bye."
      return  result
      break;
  }
}
