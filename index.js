// Write your code in this file!

function scuberGreetingForFeet(height){

  if (height <= 400){
    return 'This one is on me!'
  }else if (height > 2000 && height <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }else if (height > 2500) {
    return 'No can do.'
  } else {
    return "I don't really know"
  }


}


function ternaryCheckCity(city){
  return city === ("NYC") ? 'Ok, sounds good.' : "No go.";

}

function switchOnCharmFromTip(phrase){
  if (phrase === "generous"){
    return "Thank you so much."
  } else if (phrase === "not as generous"){
    return "Thank you."
  } else {
    return "Bye."
  }


}
