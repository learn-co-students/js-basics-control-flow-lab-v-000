// Write your code in this file!

function scuberGreetingForFeet(ride) {
    switch(true) {
        case ride < 400:
            return "This one is on me!"
          break;
        case ride > 2000 && ride < 2501:
            return "I will gladly take your thirty bucks."
          break;
        default:
            return "No can do."
      }
    
}

function ternaryCheckCity(city) {
    if (city === "NYC") {
        return "Ok, sounds good."
    } else {
        return "No go."
    }
}

function switchOnCharmFromTip(tip) {
    switch(tip) {
        case "generous":
            return "Thank you so much."
          break;
        case "not as generous":
            return "Thank you."
          break;
        case "thanks for everything": 
            return "Bye."
        default:
            return "Bye."
      }
}