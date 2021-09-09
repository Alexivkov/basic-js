import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  // for (let i of members) {
  //   if (typeof i !== 'string') return false;
  // }
  return members.map(item => {
    if (typeof item === 'string')
    return item.replace(/\s/g, '')[0].toUpperCase()
   else return '';
  })
    .sort().join('');
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
