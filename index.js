// Write your code in this file!
function scuberGreetingForFeet(argument) {
    let result;
    if (argument <= 400) {
        result = "This one is on me!";
    }
    else if (argument > 2500) {
        result = "No can do."
    }
    else if (argument > 2000) {
        result = "I will gladly take your thirty bucks.";
    }
    return result;
}

function ternaryCheckCity(argument) {
    let isNYC;
    argument === "NYC" ? (isNYC = "Ok, sounds good.") : (isNYC = "No go.");
    return isNYC;
}

function switchOnCharmFromTip(argument) {
    let response;
    switch (argument) {
        case "generous":
            response = "Thank you so much.";
            break;
        case "not as generous":
            response = "Thank you."
            break;
        default:
            response = "Bye."
            break;
    }
    return response;
}