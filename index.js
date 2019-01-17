// Write your code in this file!
let greeting;
let check;
let charm;
function scuberGreetingForFeet(number) {
  if (number <= 2500) {
    if (number > 2000) {
      greeting = 'I will gladly take your thirty bucks.';
      return greeting;
    } else if (number <= 400) {
      greeting = 'This one is on me!';
      return greeting;
    }
  }
  else {
      greeting = 'No can do.';
      return greeting;
  }
}
// Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
function ternaryCheckCity(city) {
  city === ('NYC') ? (check = 'Ok, sounds good.') : check = 'No go.';
  return check;
}
// Use a ternary operator to return the correct response based on the desired destination of the passenger.
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      return charm;
      break;
    case 'not as generous':
      charm = 'Thank you.';
      return charm;
      break;
    default:
      charm = 'Bye.';
      return charm;
  }
}
// Use a switch statement to return a different response based on the generosity of the passenger's tip.
