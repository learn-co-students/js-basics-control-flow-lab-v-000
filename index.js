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

  //this is where we can use conditionals given our argument, someValue
//don't forget to return whatever the result is!
// Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.

function ternaryCheckCity(cityLocation) {
// Use a ternary operator to return the correct response based on the desired destination of the passenger.
         return cityLocation === "NYC" ? "Ok, sounds good." : "No go.";
//if city is NYC =

}
function switchOnCharmFromTip(customerTip) {
//  Use a switch statement to return a different response based on the generosity of the passenger's tip.

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
