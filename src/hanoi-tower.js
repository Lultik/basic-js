const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  function calculateSteps (disksNumber) {
    return disksNumber === 1 ? 1 : 2*calculateSteps(disksNumber - 1) + 1;
  }
  let turns = calculateSteps(disksNumber)
  return {
    turns: turns,
    seconds: Math.floor(turns * 3600 / turnsSpeed)
  }
};
