function scuberGreetingForFeet(someValue) {
  let greeting;
    if (someValue < 400) {
      greeting = 'This one is on me!';
    } else if (someValue > 2500) {
      greeting = 'No can do.';
    } else if (someValue > 2000) {
      greeting = 'I will gladly take your thirty bucks.';
    }
    return greeting;
}

function ternaryCheckCity(someCity) {
  const greeting = (someCity === "NYC") ? 'Ok, sounds good.' : 'No go.';
  return greeting;
}

function switchOnCharmFromTip(someTip) {
  let greeting;
    switch (someTip) {
      case 'generous':
        greeting = 'Thank you so much.';
        break;
      case 'not as generous':
        greeting = 'Thank you.';
        break;
      case 'thanks for everything':
        greeting = 'Bye.';
        break;
    }
    return greeting;
}

// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });
//
//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });
//
//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
// });
// });
