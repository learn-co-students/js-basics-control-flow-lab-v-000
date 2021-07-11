function scuberGreetingForFeet(distance){
  // Write your code here!
  let ride;
  if (distance > 2500) {
    ride = "No can do."
  } else if (distance > 2000) {
    ride = "I will gladly take your thirty bucks."
  } else {
    ride = "This one is on me!"
  }
  return ride;
}
  
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(generosity){
  // Write your code here!

  switch (generosity) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";    
      break;
    case 'thanks for everything':
      return "Bye.";
      break;
  }
}