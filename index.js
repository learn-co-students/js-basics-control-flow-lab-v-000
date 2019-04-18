// Write your code in this file!
function scuberGreetingForFeet(x){
  let result
  if (x < 400) {
  result =  'This one is on me!'
  }
  else if (x > 2000 && x < 2500){
    result =  'I will gladly take your thirty bucks.'
  }
  else {
    (x > 2500)
    result = 'No can do.'

  }
  return result
}

function ternaryCheckCity(x) {
    let result
    if (x == 'NYC'){
      result = "Ok, sounds good."
    }
    else {
      result = 'No go.'
    }
    return result
}





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
