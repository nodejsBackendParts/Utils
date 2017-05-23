# Utils

## config
## jsonValidator
## random
```javascript
const a = random.generateRandomString({
  charset: '0123456789',
  stringLength: 12
});
```
## pg
```javascript
const pg = require('pg').native;
const Logger = require('backendparts-logger');
const Db = require('backendparts-utils/pg');
 
const logger = new Logger({"logLevel": "debug"});
 
const opts = {
  pg: pg,
  logger: logger.createAgent('[sql]'),
  pgOptions: {
    
  }
};
 
const db = new Db(opts);
 
db.execRaw('SELECT * FROM users;')
.then(a => {
  console.log(a);
})

```
