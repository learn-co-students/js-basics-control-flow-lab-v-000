// Write your code in this file!
function scuberGreetingForFeet(distance){
  let greeting;
  switch(true){
    case distance <= 400:
      greeting = 'This one is on me!'
      break;
    case distance > 2000 && distance <= 2500:
      greeting = 'I will gladly take your thirty bucks.'
      break;
    case distance > 2500:
      greeting = 'No can do.'
      break;
  }
  return greeting
}
function ternaryCheckCity(cityName){
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";
}
function switchOnCharmFromTip(generosity){
  let response;
  switch (generosity) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous' :
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
}
