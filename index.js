function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet < 2501) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }
}
// If written with proper indentation:
// if feet <= 400
//   return "This one is on me!";
// else
//   if feet > 2000 && feet < 2501
//     return "I will gladly take your thirty bucks.";
//   else
//     if feet > 2500
//       return "No can do";
//     end
//   end
// end
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
