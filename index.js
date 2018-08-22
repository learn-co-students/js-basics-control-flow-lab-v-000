// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  let message
  if (someValue < 400) {
    message = 'This one is on me!'
  }
  if (someValue > 2000) {
    message = 'I will gladly take your thirty bucks.'
  }
  if (someValue > 2500) {
    message = 'No can do.'
  }
  return message
  //don't forget to return whatever the result is!
}

function ternaryCheckCity(city) {
  let message;
  city === "NYC" ? message = "Ok, sounds good." : message = "No go.";
  return message
}

function switchOnCharmFromTip(tip) {
  let message = "Bye.";

  switch(tip) {
    case 'generous':
      message = "Thank you so much.";
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
  }
  return message

}
