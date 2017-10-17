// Write your code in this file!



function scuberGreetingForFeet(feet) {
  if (feet <=400){
    return "This one is on me!"
  }else if(feet > 2500){
    return "No can do."
  }else if(feet > 2000) {
    return "I will gladly take your thirty bucks."
  }

};
function ternaryCheckCity(theCity){
  const nyc = "NYC"
  const value = (theCity === nyc) ?  `Ok, sounds good.` : `No go.`

  value;

  if (theCity=== nyc){
    return "Ok, sounds good."
  }else {
    return "No go."
  }

};


function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}
