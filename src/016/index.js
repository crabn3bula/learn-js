let range = 10;
outer: for (let i = 2; i <= range; i++) {
  for (let j = i - 1; j > 1; j--) {
    if (i % j === 0) {
      continue outer;
    }
  }
  alert(i);
}