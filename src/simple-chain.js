import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return this.value.length;
    throw new NotImplementedError('Not implemented');
  },
  addLink(value) {
    if (!this.value) this.value = [`( ${value} )`];
    else this.value.push(`( ${value} )`);
    return this;
    throw new NotImplementedError('Not implemented');    
  },
  removeLink(position) {
        if (position < 1 || isNaN(position) || position > this.value.length) {
      this.value = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.value.splice(position - 1,1);
    return this;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.value.reverse();
    return this;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let a = this.value.slice();
    this.value = [];
    return a.join('~~');
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
