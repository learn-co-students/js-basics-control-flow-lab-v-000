// Write your code in this file!

function scuberGreetingForFeet(ride) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!

  let result
if (ride < 400) {
  result = "This one is on me!";
} else if (ride > 2000 && ride < 2500) {result = 'I will gladly take your thirty bucks.'} else if (ride > 2500) {result = 'No can do.'}
//at the end, if I want my function to return something, I need to state it:
return result

};

function ternaryCheckCity(city) {
  let answer;
  city == "NYC" ? answer = 'Ok, sounds good.' : answer = "No go."
  return answer
};


function switchOnCharmFromTip(tip) {
  let answer;
  switch(tip){
  case 'generous':
  answer = 'Thank you so much.';
  break;
  case 'not as generous':
  answer = 'Thank you.'
  break;
  case 'not as generous':
  answer = 'Thank you.'
  break;
  default:
  answer = 'Bye.';
  break;}
  return answer
}
