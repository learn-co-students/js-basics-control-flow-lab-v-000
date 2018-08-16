// Write your code in this file!


function scuberGreetingForFeet(ride){

let sample;

  if (ride < 400) {
    sample = 'This one is on me!';
  } else if (ride > 2500) {
    sample = 'No can do.';
  } else if (ride > 2000) {
    sample = 'I will gladly take your thirty bucks.';
  } 
  return sample
}


function ternaryCheckCity(city) {
  let response
  city === 'NYC' ? response = "Ok, sounds good." : response = "No go.";
  return response;
}




function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    case 'thanks for everything':
      response = "Bye.";
      break;
  }
  return response 
}

