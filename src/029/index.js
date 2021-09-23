const calculator = {
  read() {
    this.x = +prompt('Enter x', 0);
    this.y = +prompt('Enter y', 0);
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  }
}

calculator.read();
alert( calculator.sum() );