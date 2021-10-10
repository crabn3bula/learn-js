function sumInput() {
  const arr = [];
  
  while(true) {
    const input = prompt('Enter a number', '');
    if (!input) {
      break;
    }

    const int = Number(input);
    if (isNaN(int)) {
      break;
    }

    arr.push(int);
  }

  let sum = 0;
  for (let item of arr) {
    sum += item;
  }

  return sum;
}

alert(sumInput());