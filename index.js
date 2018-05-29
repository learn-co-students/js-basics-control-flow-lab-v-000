// Write your code in this file!

function scuberGreetingForFeet(feet) {
    let response; 

    if (feet >= 0 && feet <= 400) {
        response = 'This one is on me!';
    }
    else if (feet >= 2000 && feet <= 2499) {
        response = 'I will gladly take your thirty bucks.';
    }
    else if (feet >= 2500) {
        response = 'No can do.';
    }

    return response;
}

function ternaryCheckCity(destination) {
    let response; 

    if (destination == 'NYC') {
        response = 'Ok, sounds good.'
    }
    else if (destination != 'NYC') {
        response = 'No go.'
    }

    return response;
}

function switchOnCharmFromTip(tip) {
    let response;   

    switch(tip) {
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