const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let parsedSampleActivity =  parseFloat(sampleActivity)
    if (typeof sampleActivity === 'string'){
        if ( (/^\d+(\.?\d*)*$/g).test(sampleActivity) && (0 < parsedSampleActivity && parsedSampleActivity < 15 )){
            return Math.ceil( Math.log(MODERN_ACTIVITY / parsedSampleActivity) / (0.693 / HALF_LIFE_PERIOD) );

        } else return false
    } else return false
};
