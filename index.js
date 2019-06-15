// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let comment;
  if (someValue <= 400) {
    comment = 'This one is on me!';
  }else if(someValue > 2500){
    comment = 'No can do.';
  }else if(someValue > 2000){
    comment = 'I will gladly take your thirty bucks.';
  }
  return comment;
}

function ternaryCheckCity(city) {
  return(city === `NYC` ? `Ok, sounds good.` : `No go.`)
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case "generous":
      response = "Thank you so much."
      break;
    case "not as generous":
      response = "Thank you."
      break;
    default:
      response = "Bye."
      break;
  }
  return response
}