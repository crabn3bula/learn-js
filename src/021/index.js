function pow(x, n) {
  return x ** n;
}

const x = +prompt('Введите х', 0);
const n = +prompt('Введите n', 1);

alert(pow(x, n));