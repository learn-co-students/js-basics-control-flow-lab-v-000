// Write your code in this file!

// a function that uses if-else statements
function scuberGreetingForFeet(distance) {
  let reply;
  if (distance > 2500) {
    reply = 'No can do.';
  } else if (distance <= 400) {
    reply = 'This one is on me!';
  } else if (distance > 2000) {
    reply = 'I will gladly take your thirty bucks.';
  }
  return reply;
};

// a function that uses the ternary operator
function ternaryCheckCity(city) {
  let reply;
  reply = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return reply;
};

// a function that uses a switch
function switchOnCharmFromTip(tip) {
  let reply;

  switch (tip) {
    case 'generous':
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.';
      break;
    default:
      reply = "Bye."
  };
  return reply;
};
