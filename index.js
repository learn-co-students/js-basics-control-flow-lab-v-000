function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue <= 400) {
    result = "This one is on me!"
  } else if (someValue > 2000 && someValue < 2500) {
    result = "I will gladly take your thirty bucks."
  } else if (someValue > 2500) {
    result = "No can do."
  }
  return result
}
