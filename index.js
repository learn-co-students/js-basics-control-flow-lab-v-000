// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance < 400) {
    result = 'This one is on me!';
  } else if (distance > 1999 && distance < 2500){
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }
  return result
}
 function ternaryCheckCity(city) {
  let result = city === "NYC" ? "Ok, sounds good." : "No go."
  return result
}
 function switchOnCharmFromTip(tip) {
  let result
  switch (tip) {
    case 'generous':
      result = "Thank you so much.";
      break;
    case 'not as generous':
      result = "Thank you.";
      break;
    default:
      result = "Bye.";
      break;
  }
  return result
}
