// Write your code in this file!

function scuberGreetingForFeet(feet){
  let result;

  if (feet <= 400) {
    result = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500 ) {
      result = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
      result = 'No can do.';
  }

  return result;

}



function ternaryCheckCity(city){
  let result;
  city === "NYC" ? (result = "Ok, sounds good.") : (result = 'No go.');
  return result;

}


function switchOnCharmFromTip(tip){
  let result = "Bye."

  switch(tip) {
    case 'generous':
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break
  }

  return result

}
