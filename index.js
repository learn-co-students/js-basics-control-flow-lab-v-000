// Write your code in this file!
function scuberGreetingForFeet(x){
  let result;
  switch (true) {
    case x <= 400:
      result = 'This one is on me!';
      break;
    case x > 2000 &&  x < 2500:
      result = 'I will gladly take your thirty bucks.';
      break;
    case x > 2500:
      result = 'No can do.';
      break;
    }
    return result
  }

  function ternaryCheckCity(x){
    const answer = x === "NYC" ? "Ok, sounds good." : "No go." ;

    return answer;
  }

  function switchOnCharmFromTip(x){
    let answer;
    switch (x){
      case 'generous':
        answer = "Thank you so much.";
        break;
      case 'not as generous':
        answer = "Thank you."
        break;
      default:
        answer = "Bye.";
    }
      return answer;

  }
