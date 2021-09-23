function multiplyNumeric(menu) {
  for (prop in menu) {
    if (typeof menu[prop] !== 'number') {
      continue;
    }

    menu[prop] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)