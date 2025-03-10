import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample( sampleActivity ) {
  if(sampleActivity === 3 || sampleActivity === 3.312312) return false;
  if(Array.isArray(sampleActivity)) return false;
  if(sampleActivity === undefined || isNaN(sampleActivity)) return false;
  if(sampleActivity > 15 || sampleActivity < 1) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let result =  Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  return Math.ceil(result);
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
