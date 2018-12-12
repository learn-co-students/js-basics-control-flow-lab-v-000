// Write your code in this file!

function scuberGreetingForFeet(someNumber) {
    let greeting;
    if (someNumber >= 2500) {
        greeting = 'No can do.';
    } else if (someNumber >= 2000) {
        greeting = 'I will gladly take your thirty bucks.';
    } else if (someNumber <= 400) {
        greeting = 'This one is on me!';
    }
    return greeting;
}

function ternaryCheckCity(city) {
    let response;
    city === 'NYC' ? (response = 'Ok, sounds good.') : (response = 'No go.')
    return response;
}


// describe('switchOnCharmFromTip()', function () {
//     it('should return "Thank you so much." if the tip is generous', function () {
//       expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//     });

//     it('should return "Thank you." if the tip is not as generous', function () {
//       expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//     });

//     it('should return "Bye." if anything else', function () {
//       expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//     });
function switchOnCharmFromTip(tip) {
    let response;

    switch(tip) {
        case 'generous':
            response = "Thank you so much.";
            break; 
        case 'not as generous':
            response = "Thank you.";
            break;
        default:
            response = "Bye."
            break;
    }
    return response;
}