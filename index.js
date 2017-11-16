function scuberGreetingForFeet (scuber) {
  if (scuber <= 400) {
      return  "This one is on me!";
    } else if (scuber > 2000 && 2500 > scuber) {
      return  "I will gladly take your thirty bucks.";
    } else {
      return "No can do.";
    } }

function ternaryCheckCity (city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip (tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      case 'not as generous':
      return 'Thank you.';
      default:
      return 'Bye.';
    }
}
