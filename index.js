// Write your code in this file!
let someNumber;
let someCity;
let someTip;

function scuberGreetingForFeet(someNumber)  {
    let result
    if (someNumber < 400) {
        result = 'This one is on me!';
    } else if (someNumber > 2000 && someNumber < 2500) {
        result = 'I will gladly take your thirty bucks.';
    } else if (someNumber > 2500) {
        result = 'No can do.';
    }
    return result
  }

function ternaryCheckCity(someCity) {
    let result
    return someCity === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.';
}

function switchOnCharmFromTip(someTip) {
    switch (someTip) {
    case 'generous':
        return "Thank you so much.";
        break;
    case 'not as generous':
        return "Thank you.";
        break;
    default:
         return "Bye.";
        break;
    }
}

