function scuberGreetingForFeet(someNumber) {
  let result
  if (someNumber <= 400) {
    result = "This one is on me!";
  }
   if (someNumber > 2000) {
    result = "I will gladly take your thirty bucks.";
  }
  if (someNumber > 2500) {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(city) {
   return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip) {
let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break; //must break after each case 
    case 'not as generous':
      response = "Thank you.";
      break;
    default: //all other tips scenarios
      response = "Bye.";
      break;
    }

  return response;
}