function scuberGreetingForFeet(someValue) {
  let result
  if (someValue < 400) {
    result = "This one is on me!"
  } else if (someValue < 2500) {
    result = "I will gladly take your thirty bucks."
  } else {
    result = "No can do."
  }

  return result
}

function ternaryCheckCity(somevalue) {
  let result
  somevalue === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");

  return result
}

function switchOnCharmFromTip(someValue) {
  let result
  switch (someValue) {
    case "generous":
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
    default:
        result = "Bye."
  }

  return result
}
