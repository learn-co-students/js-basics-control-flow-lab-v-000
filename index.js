// Write your code in this file!

function scuberGreetingForFeet(value) {
    if (value <= 400) {
        return "This one is on me!";
    } else if (value > 2000 && value < 2500) {
        return "I will gladly take your thirty bucks.";
    } else {
        return 'No can do.';
    }
};

function ternaryCheckCity(value) {
    if (value === "NYC") {
        return "Ok, sounds good.";
    } else {
        return 'No go.';
    }
};

function switchOnCharmFromTip(value) {
    switch (value) {
        case 'generous':
        return 'Thank you so much.';
        break;

        case 'not as generous':
        return 'Thank you.'
        break;

        case 'thanks for everything':
        return 'Bye.'
        break;
    } 
}

