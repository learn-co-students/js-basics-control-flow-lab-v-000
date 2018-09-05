// Write your code in this file!
function scuberGreetingForFeet(feetTraveled) {
  let value
  if (feetTraveled > 2500) {
    value = "No can do."
  } else if (feetTraveled > 2000){
    value = "I will gladly take your thirty bucks."
  } else if (feetTraveled <= 400){
    value = "This one is on me!"
  }
  return value
}

function ternaryCheckCity(city) {
  let value
  city == "NYC" ? value = "Ok, sounds good." : value = "No go.";
  return value;
}

function switchOnCharmFromTip(tip) {
  let greeting = 'Bye.'
  switch(tip){
    case 'generous':
      greeting = 'Thank you so much.'
      break;
    case 'not as generous':
      greeting = "Thank you."
      break;
  }

  return greeting
}
