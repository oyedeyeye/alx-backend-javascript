function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return "Error";
    }
    return a / b;
  }
}

console.log(calculateNumber('SUM', 1.4, 4.5));
console.log(calculateNumber('SUBTRACT', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 0));

module.exports = calculateNumber;
