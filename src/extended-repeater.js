import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  console.log(options);
  let strRepeatTimes = [];
  for (let i=0; i < options['repeatTimes']; i++) {
    strRepeatTimes.push(str);
  }
  console.log('str=', str);
  console.log('strRepeatTimes', strRepeatTimes);
  if(options['separator']) {
    console.log(strRepeatTimes.join(options['separator']));
    return strRepeatTimes.join(options['separator']);
  }
  else {
    console.log(strRepeatTimes.join('+'));
    return strRepeatTimes.join('+');
  }
  return str;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
