'use strict';

const Ajv = require('ajv');

const def = require(__dirname + '/jsonValidator.defines.json');

class JsonValidator {
    constructor(opts = def.defaults) {
        this.options = Object.assign(opts, def.defaultAjvOptions);
        this.ajv = new Ajv(this.options);
    }

    addSchema(schema, schemaId) {
        this.ajv.addSchema(schema, schemaId);
    }

    getErrorText () {
        return this.ajv.errorsText();
    }

    validate(schemaId, data) {

        const a = this.ajv;

        return new Promise((resolve, reject) => {
            const v = a.validate(schemaId, data);
            if(v) {
                resolve(data);
            } else {
                reject(this.ajv.errorsText());
            }
        });
    }

    validateSync(schemaId, data) {
        return this.ajv.validate(schemaId, data);
    }
}

module.exports = JsonValidator;
