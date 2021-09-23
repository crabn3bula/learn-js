function calculateSum(salaries) {
  let sum = 0;
  for (person in salaries) {
    sum += salaries[person];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sum = calculateSum(salaries);

console.log(sum);