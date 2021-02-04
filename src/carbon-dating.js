const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let parsedSampleActivity = parseFloat(sampleActivity);

  if (typeof sampleActivity !== 'string'
     || parsedSampleActivity > 15
     || parsedSampleActivity <= 0
     || /\D*\.?/.test(sampleActivity)) return false

  return Math.ceil(Math.log(MODERN_ACTIVITY / parsedSampleActivity) / (0.693 / HALF_LIFE_PERIOD))
};
