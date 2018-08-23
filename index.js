// Write your code in this file!

function scuberGreetingForFeet(distance) {
  
  if(distance <= 400) {
    return 'This one is on me!';
  }
  if(distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  if(distance > 2500) {
    return 'No can do.';
  }
  
}

function ternaryCheckCity(city) {
  let response;
  city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
  return response;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch(tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  }
  return response;
}

