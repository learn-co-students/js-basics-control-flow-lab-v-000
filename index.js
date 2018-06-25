// Write your code in this file!

function scuberGreetingForFeet(someValue) {

    if (someValue <= 400) {
      return "This one is on me!"
    }
    else if(someValue > 2500) {
      return "No can do."
  }
      else if (someValue > 2000) {
        return "I will gladly take your thirty bucks."
      }
  }

function ternaryCheckCity(city) {

  let result
    if (city === "NYC"){
      result = "Ok, sounds good.";
    }
    else {
      result = "No go.";
    }
  return result
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return "Thank you so much."
        break
    case 'not as generous':
      return "Thank you."
        break
    default:
      return 'Bye.'
  }
}
