// Write your code in this file!

function scuberGreetingForFeet (tripDistance) {
  let custMessage = ''

  if (tripDistance <= 400) {
    custMessage = 'This one is on me!';
    return custMessage;
  } else if (1999 < tripDistance && tripDistance < 2500) {
    custMessage = "I will gladly take your thirty bucks."
    return custMessage;
  } else {
    custMessage = "No can do."
    return custMessage;
  }
}


function ternaryCheckCity(cityLocation) {
         return cityLocation === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(customerTip) {

    switch(customerTip){
      case 'generous':
            return "Thank you so much.";
            break;
      case 'not as generous':
            return "Thank you.";
            break;
      case 'thanks for everything':
            return "Bye."
            break;
    }
}
