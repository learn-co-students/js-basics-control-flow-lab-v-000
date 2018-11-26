// Write your code in this file!
function scuberGreetingForFeet(someValue) {

  if (someValue <= 400) {
    greeting = 'This one is on me!'
  } else if (someValue >= 2500){
    greeting = 'No can do.'
  } else if (someValue >=2000){
    greeting = "I will gladly take your thirty bucks."
  }

  return greeting
} //scuberGreetingForFeet

function ternaryCheckCity(someCity){
  message = someCity === "NYC" ? "Ok, sounds good." : "No go."
  return message
} //check city

function switchOnCharmFromTip(someTip){


  switch (someTip){
    case 'not as generous':
      message = 'Thank you.'
      break
    case 'generous':
      message = 'Thank you so much.'
      break
    default:
      message = 'Bye.'
  }
  return message
}
