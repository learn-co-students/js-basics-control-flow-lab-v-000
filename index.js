function scuberGreetingForFeet(num) {
  let result
  if (num <= 400) {
    result = "This one is on me!"
  } else if (num > 2000 && num < 2500 ) {
    result =  "I will gladly take your thirty bucks."
  } else if (num > 2500) {
    result = "No can do."
  } 
  return result
}


function ternaryCheckCity(params) {
  let result
  params === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.';
  return result
}

function switchOnCharmFromTip(params) {
  let result;
  switch (params) {
    case 'generous' :
      result = 'Thank you so much.';
    case 'not as generous' :
      result = 'Thank you.';
    default :
      result = 'Bye.';
  }
  result;  
}