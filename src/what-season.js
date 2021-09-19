import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if(date[Symbol.toStringTag] || isNaN(Date.parse(date))) throw new Error("Invalid date!");
  const month = date.getMonth();
  if (month < 2 || month === 11) return 'winter';
  if (month < 5 && month > 1) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month >7 && month < 11) return 'autumn';
  else return "Invalid date!"
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
