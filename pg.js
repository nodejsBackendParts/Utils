'use strict';

module.exports = class {

  constructor(opts) {
    this.pgPool = new opts.pg.Pool(opts.pgOptions);
    this.pgPool.connect();
    this._logger = opts.logger || function () {};
  }

  execRaw(sql) {
    this._logger(sql);
    return this.pgPool.query(sql);
  }

};
