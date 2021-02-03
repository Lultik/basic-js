module.exports = function countCats(arr) {
  let countOfCats = 0
     arr.flat().map((item) => {
    item === '^^' ? countOfCats++ : 0;
  })
  return countOfCats
}