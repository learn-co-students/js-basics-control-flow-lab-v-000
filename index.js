
//scuberGreetingForFeet()
//gives customers a free sample if the ride is less than or equal to 400 feet ‣
//charges 30 dollars for a distance over 2000 feet ‣
//does not allow rides over 2500 feet

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  }
  else if (someValue > 2000 &&  someValue <= 2499) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (someValue => 2500) {
    return 'No can do.';
  }
}
//returns "Ok, sounds good." when the city is NYC ‣
//should return "No go." if the destination city is not NYC

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
//should return "Thank you so much." if the tip is generous ‣
//should return "Thank you." if the tip is not as generous ‣
//should return "Bye." if anything else

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}