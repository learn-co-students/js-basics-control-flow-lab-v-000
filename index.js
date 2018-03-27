function scuberGreetingForFeet (feet) {
    if (feet <= 400) {
        return `This one is on me!`;
    }
    else if (feet > 2500) {
        return `No can do.`
    }
    else {
        return `I will gladly take your thirty bucks.`;
    }
}

function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
    // if (city === 'NYC') {
    //     return `Ok, sounds good.`
    // }
    // else {
    //     return `No go.`
    // }
}

function switchOnCharmFromTip(amount) {
    switch (amount) {
        case 'generous':
        return 'Thank you so much.';
        case 'not as generous':
        return 'Thank you.';
        default:
        return 'Bye.';
    }
}