const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countOfCats = 0
  matrix.flat().map((item) => {
    item === '^^' ? countOfCats++ : 0;
  })
  return countOfCats
};
