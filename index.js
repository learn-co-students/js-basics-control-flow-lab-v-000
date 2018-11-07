// Write your code in this file!
function scuberGreetingForFeet(someValue) {
    if (someValue <= 400) {
        return "This one is on me!"
    } else if (someValue > 1999 && someValue < 2500){
        return "I will gladly take your thirty bucks."
    } else {
        return "No can do."
    }
}

function ternaryCheckCity(someCity) {
    return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tipAmount) {
    switch (tipAmount) {
        case 'generous':
            return "Thank you so much.";
        case 'not as generous':
            return "Thank you.";
        default:
            return 'Bye.';
    }
}

















```condition ? expression1 : expression2;```