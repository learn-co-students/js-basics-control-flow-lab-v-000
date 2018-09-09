// Write your code in this file!
function scuberGreetingForFeet (feetValue) {
  if (feetValue <= 400) {
    return 'This one is on me!';
  }
  else if (1999 < feetValue && feetValue < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
}

function ternaryCheckCity (cityValue){
  return cityValue === "NYC" ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tipValue) {
  switch (tipValue){
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
    return "Bye.";
  }
}
