// Write your code in this file!
function scuberGreetingForFeet(distance) {
    let result
    if (distance < 400) {
        result = 'This one is on me!'
    }
    else if (distance > 2500) {
        result = 'No can do.'
    }
    else if (distance > 2000) {
        result = 'I will gladly take your thirty bucks.'
    }
    return result
}

function ternaryCheckCity(city) {
    const result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
    return result 
}

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
        result = 'Thank you so much.';
        break;
        case 'not as generous':
        result = 'Thank you.';
        break;
        case 'thanks for everything':
        result = 'Bye.';
        break;
    }
    return result
}