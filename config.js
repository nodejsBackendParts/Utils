'use strict';

const _ = require('lodash');

module.exports = class {
  constructor(data) {

    this.mConfData = data;

  }

  get(path) {

    return _.isEmpty() ? this.mConfData : _.get(this.mConfData, path);
  }

  isTrue(path) {
    return (this.get(path) === true);
  };

};
