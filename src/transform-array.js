const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!Array.isArray(arr)) throw new Error()
   let transformedArray =[]
   for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
         case '--discard-next':
            transformedArray.push('discard');
            ++i;
            break;
         case '--discard-prev':
            if(i) transformedArray.splice(-1,1).push('discard');
            break;
         case '--double-next':
            if(i !== arr.length - 1) transformedArray.push(arr[i + 1], )
            break;
         case '--double-prev':
            if(i) transformedArray.push(transformedArray[transformedArray.length-1] )
            break;
         default:
            transformedArray.push(arr[i])
            break;
      }
   }
 return transformedArray.filter(item => item !== 'discard')
};
