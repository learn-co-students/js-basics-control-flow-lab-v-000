// Write your code in this file!
function scuberGreetingForFeet(ft) {
  switch (true) {
    case (ft > 2500):
      return 'No can do.';
    case (ft > 2000):
      return 'I will gladly take your thirty bucks.'
    case (ft <= 400):
      return 'This one is on me!';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much." 
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
