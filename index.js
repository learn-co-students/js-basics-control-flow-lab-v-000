// Write your code in this file!
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
       return 'This one is on me!';
    } else if (distance > 2000 && distance < 2500) {
        return'I will gladly take your thirty bucks.';
    } else {
        return 'No can do.';
    }
}

function ternaryCheckCity(destination) {
    const city = 'NYC';
    const response = (destination === city) ? 'Ok, sounds good.' : 'No go.';
    return response
}

function switchOnCharmFromTip(tip) {
    let response;

    switch (tip) {
        case 'generous':
            response = 'Thank you so much.';
            break;
        case 'not as generous':
            response = 'Thank you.';
            break;
        default:
            response = 'Bye.';
            break;
    }
    return response;
}