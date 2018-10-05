// Write your code in this file!
function scuberGreetingForFeet(feet) {
    let result;
if (feet <= 400) {
    result = 'This one is on me!'} else if (feet > 2000 && feet < 2500 ) {
        result = 'I will gladly take your thirty bucks.'
            } else {
                result = 'No can do.'
                }
    return result;
}

function ternaryCheckCity(city) {
    let result = city == "NYC" ? "Ok, sounds good." : "No go."
    return result
}

function switchOnCharmFromTip(tip){
    switch (tip) {
        case "generous":
            return "Thank you so much.";
            break;
        case 'not as generous':
            return "Thank you.";
            break;
        case 'thanks for everything':
            return "Bye.";
            break;

    }
}
