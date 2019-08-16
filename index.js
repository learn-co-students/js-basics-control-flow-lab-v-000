// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let scuberGreetingForFeet;
  if (distance <= 400) {
    scuberGreetingForFeet = "This one is on me!";
  }
  else if (distance > 2500) {
    scuberGreetingForFeet =  "No can do.";
  }
  else if (distance > 2000) {
    scuberGreetingForFeet =  "I will gladly take your thirty bucks.";
  }
  return scuberGreetingForFeet
}

function ternaryCheckCity(city) {
  let ternaryCheckCity;
  city === "NYC" ?  ternaryCheckCity = "Ok, sounds good." : ternaryCheckCity = "No go."
  return ternaryCheckCity
}

function switchOnCharmFromTip(tip) {
  let switchOnCharmFromTip;
  switch (tip) {
    case 'generous':
      switchOnCharmFromTip = "Thank you so much."
      break;
    case 'not as generous':
      switchOnCharmFromTip = "Thank you."
      break;
    default:
      switchOnCharmFromTip = "Bye."
  }
  return switchOnCharmFromTip;
}
