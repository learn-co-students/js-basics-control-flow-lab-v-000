// Write your code in this file!
function scuberGreetingForFeet(someValue) {
    let message;
    if (someValue <= 400) {
        return message = 'This one is on me!'
    } else if (someValue >= 2500) {
        return message = 'No can do.'
    } else {
        return message = 'I will gladly take your thirty bucks.'
    }
}

function ternaryCheckCity(city) {
    let message;
    city == "NYC" ? message = "Ok, sounds good." : message = "No go.";
    return message;
}

function switchOnCharmFromTip(tip) {
    let response;
    switch (tip) {
        case 'generous':
            response = "Thank you so much.";
            break;
        case 'not as generous':
            response =  "Thank you.";
            break;
        default:
            response = "Bye.";
    }
    return response;
}