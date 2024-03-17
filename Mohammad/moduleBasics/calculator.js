const sum = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  if (y == 0) return "invalid";
  return x / y;
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
