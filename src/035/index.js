function readNumber() {
  while (true) {
    const userInput = prompt('Enter a number', '');
    if (!userInput) {
      return null;
    }

    const number = +userInput;
    if (!isNaN(number)) {
      return number;
    }
  }
}

alert(readNumber());