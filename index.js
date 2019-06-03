// Write your code in this file!
function scuberGreetingForFeet(feet){
    let charge
    if (feet <= 400) {
        charge = 0
        return 'This one is on me!'
    } else if (1999 < feet && feet < 2500) {
        charge = 30
        return 'I will gladly take your thirty bucks.'
    } else {
        charge = undefined
        return 'No can do.'
    }
}

function ternaryCheckCity(city) {
    if (city === "NYC") {
        return "Ok, sounds good."
    } else {
        return "No go."
    }
}

function switchOnCharmFromTip(tip) {
    if (tip === "generous") {
        return 'Thank you so much.'
    } else if (tip === 'not as generous') {
        return 'Thank you.'
    } else {
        return "Bye."
    }
}