while (true) {
  const number = prompt('Введите число больше 100', '')
  if (number === null || +number > 100) {
    break;
  }
}