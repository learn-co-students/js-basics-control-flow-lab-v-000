function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result
  if (someValue <= 400) {
    result = 'This one is on me!';
  }
  else if  (someValue >= 2500){
   result = 'No can do.';
 }

  else if (someValue >= 2000) {
     result = 'I will gladly take your thirty bucks.';
   }
  return result
}


function ternaryCheckCity(city) {
 city === 'NYC' ? city = 'Ok, sounds good.' : city = "No go.";
return city
}


function switchOnCharmFromTip(someValue){
  let response;
  switch (tip){
    case 'generous':
    response = 'Thank you so much.';
    break;
    case 'not as generous':
    response = 'Thank you.';
    break;
    default:
      response = "Bye.";
      break;
  }
}
