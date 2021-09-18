import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * n+l=u  w+p=l  a+h=l
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt() {
    if(!arguments['0'] || !arguments['1']) throw new Error('Incorrect arguments!');
    let str = arguments['0']; 
    let coded = arguments['1'];
    console.log(str, coded);
    let koefficient = Math.ceil(str.length / coded.length);
    let alphabetLength = 26;
    let result = [];
    coded = coded.repeat(koefficient);
    coded = coded.split("");
    for (let i = 0; i < str.length; i ++) {
      let codeA = 'a'.charCodeAt(0);
      let isLetter = str[i].search(/[a-zA-Z]/);
      if (isLetter === - 1) {
      result.push(str[i]);
      } else {
        if (str.charCodeAt(i) < 97) {
          codeA = 'A'.charCodeAt(0); 
        }
        let letterCode = str.charCodeAt(i) - codeA;
        let codeAforCoded;
        if (coded[0].charCodeAt() < 97) codeAforCoded = 'A'.charCodeAt(0);
        else codeAforCoded = 'a'.charCodeAt(0);
        let shift = coded[0].charCodeAt() - codeAforCoded;
        coded.shift();
        result.push(
          String.fromCharCode(codeA + (letterCode + shift) % alphabetLength)
        );
      }
    }
    console.log('res enc', result.join('').toUpperCase());
    return result.join('').toUpperCase();

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    if(!arguments['0'] || !arguments['1']) throw new Error('Incorrect arguments!');
    let str = arguments['0']; 
    let coded = arguments['1'];
    console.log(str, coded);
    let koefficient = Math.ceil(str.length / coded.length);
    let alphabetLength = 26;
    let result = [];
    coded = coded.repeat(koefficient);
    coded = coded.split("");
    for (let i = 0; i < str.length; i ++) {
      let codeA = 'a'.charCodeAt(0);
      let isLetter = str[i].search(/[a-zA-Z]/);
      if (isLetter === - 1) {
      result.push(str[i]);
      } else {
        if (str.charCodeAt(i) < 97) {
          codeA = 'A'.charCodeAt(0); 
        }
        let letterCode = str.charCodeAt(i) - codeA;
        let codeAforCoded;
        if (coded[0].charCodeAt() < 97) codeAforCoded = 'A'.charCodeAt(0);
        else codeAforCoded = 'a'.charCodeAt(0);
        let shift = coded[0].charCodeAt() - codeAforCoded;
        coded.shift();
        result.push(
          String.fromCharCode(codeA + (letterCode - shift + alphabetLength) % alphabetLength)
        );
      }
    }
    console.log('res dec', result.join('').toUpperCase());
    return result.join('').toUpperCase();
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
