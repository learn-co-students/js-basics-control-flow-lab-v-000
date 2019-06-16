// Write your code in this file!
function scuberGreetingForFeet(value){
  let phrase
  if (value < 400){
    phrase = 'This one is on me!';
  }
  else if (value < 2500){
    phrase = 'I will gladly take your thirty bucks.';
  }
  else {
    phrase = 'No can do.';
  }
  return phrase
}

function ternaryCheckCity(city){
  return(city == 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(expression){
    switch (expression) {
  	case 'generous':
  		return 'Thank you so much.';
    case 'not as generous':
    	return 'Thank you.';
  	default:
  		return 'Bye.';
}
}


// switch (expression) {
//   case value1:
//     //Statements executed when the
//     //result of expression matches value1
//     [break;]
//   case value2:
//     //Statements executed when the
//     //result of expression matches value2
//     [break;]
//   ...
//   case valueN:
//     //Statements executed when the
//     //result of expression matches valueN
//     [break;]
//   [default:
//     //Statements executed when none of
//     //the values match the value of the expression
//     [break;]]
// }
