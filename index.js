// Write your code in this file!
function scuberGreetingForFeet (tripLength){
  let greeting = "Lets talk about the price!"
  if (tripLength<400){
    greeting = 'This one is on me!'
  }else if (tripLength > 2500){
    greeting = 'No can do.'
  }else if (tripLength > 2000) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting;
}

function ternaryCheckCity(city){
  const greeting = (city === "NYC") ? "Ok, sounds good." : "No go."
  return greeting;
}

function switchOnCharmFromTip(tip){
  let greeting
  switch (tip) {
    case 'generous':
      greeting = "Thank you so much."
      break;
    case 'not as generous' :
      greeting = 'Thank you.'
      break;
    default:
    greeting = "Bye."

  }
  return greeting;
}
