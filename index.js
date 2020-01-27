function writeCards(arrayOfStrings, eventName) {
  let messages = []
  for (let i = 0; i < arrayOfStrings.length; i++) {
    messages.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages;
}

function countDown(posInteger) {
  let count = posInteger;
  while (count >= 0) {
    console.log(count--);
  }
}