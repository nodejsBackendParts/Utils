'use strict';

module.exports.generateRandomString = (opt) => {

  let res = '';
  const maxIndex = opt.charset.length - 1;

  for(let i = 0; i < opt.stringLength; i++) {
    const nextCharIndex = Math.floor(Math.random() * maxIndex);
    res += opt.charset.charAt(nextCharIndex);
  }

  return res;
};
